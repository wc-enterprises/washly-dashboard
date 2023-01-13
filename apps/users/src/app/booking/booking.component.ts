import { Component, OnInit } from '@angular/core';
import { WashlyService } from '../services/washly.service';
import { IBooking, ParsedBooking } from './utils/interface';
import { classifyBookings, parseBookings } from './utils/util';

@Component({
  selector: 'washly-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  constructor(private ws: WashlyService) {}

  loadingData = true;
  pendingBookings: ParsedBooking[] | undefined;
  ongoingBookings: ParsedBooking[] | undefined;
  outForDeliveryBookings: ParsedBooking[] | undefined;
  completedBookings: ParsedBooking[] | undefined;
  rejectedBookings: ParsedBooking[] | undefined;

  ngOnInit() {
    console.log('Loaded ngOnIt of Bookings Component');
    const bookingsStream = this.ws.getBookings();
    if (bookingsStream) {
      bookingsStream.subscribe(async (bookings: Promise<IBooking[]>) => {
        console.log('Bookings:');
        console.log(await bookings);
        if (bookings) {
          const parsedBookings = parseBookings(await bookings);
          const classifiedBookings = classifyBookings(parsedBookings);
          this.pendingBookings = classifiedBookings.pendingBookings;
          this.ongoingBookings = classifiedBookings.ongoingBookings;
          this.outForDeliveryBookings =
            classifiedBookings.outForDeliveryBookings;
          this.completedBookings = classifiedBookings.completedBookings;
          this.rejectedBookings = classifiedBookings.rejectedBookings;
        }
        this.loadingData = false;
      });
    }
  }
}
