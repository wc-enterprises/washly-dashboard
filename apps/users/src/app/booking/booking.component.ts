import { Component, OnInit } from '@angular/core';
import { AppDB } from '../services/db';
import { WashlyService } from '../services/washly.service';
import { IBooking, ParsedBooking } from './utils/interface';
import { parseBookings } from './utils/util';

@Component({
  selector: 'washly-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  constructor(private ws: WashlyService, private db: AppDB) {}

  loadSpinner = true;
  pendingBookings: ParsedBooking[] | undefined;
  ongoingBookings: ParsedBooking[] | undefined;
  outForDeliveryBookings: ParsedBooking[] | undefined;
  completedBookings: ParsedBooking[] | undefined;
  rejectedBookings: ParsedBooking[] | undefined;

  async ngOnInit() {
    console.log('Loaded ngOnIt of Bookings Component');
    await this.updateVariables();

    const bookingsStream = this.ws.getBookings();
    if (bookingsStream) {
      bookingsStream.subscribe(async (bookings: Promise<IBooking[]>) => {
        if (bookings) {
          console.log('bookings', bookings);
          const parsedBookings = parseBookings(await bookings);
          await this.addDataToDexie(parsedBookings);
          await this.updateVariables();
        }
      });
    }
    this.loadSpinner = false;
  }

  async addDataToDexie(data: ParsedBooking[]) {
    if (data.length) {
      await this.db.bookings.bulkPut(data);
    }
  }

  async updateVariables() {
    this.pendingBookings = await this.db.bookings
      .where('status')
      .equals('WAITING_FOR_CONFIRMATION')
      .toArray();

    this.ongoingBookings = await this.db.bookings
      .where('status')
      .equals('OUT_FOR_PICKUP')
      .or('status')
      .equals('LAUNDRY_IN_PROGRESS')
      .toArray();

    this.outForDeliveryBookings = await this.db.bookings
      .where('status')
      .equals('OUT_FOR_DELIVERY')
      .toArray();

    this.completedBookings = await this.db.bookings
      .where('status')
      .equals('COMPLETED')
      .toArray();

    this.rejectedBookings = await this.db.bookings
      .where('status')
      .equals('CANCELLED_BY_ADMIN')
      .or('status')
      .equals('CANCELLED_BY_CUSTOMER')
      .toArray(s);
  }
}
