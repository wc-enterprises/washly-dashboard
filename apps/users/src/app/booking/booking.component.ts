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
        console.log('Bookings:');
        console.log(await bookings);
        if (bookings) {
          console.log('testing');
          const parsedBookings = parseBookings(await bookings);
          await this.addUniqueData(parsedBookings);
          await this.updateVariables();
        }
      });
    }
    this.loadSpinner = false;
  }

  async addUniqueData(data: ParsedBooking[]) {
    // Check if the data already exists in the database
    const existingData = await this.db.bookings
      .where('id')
      .anyOf(data.map((item) => item.id))
      .toArray();

    const existingEmails = existingData.map((item) => item.id);

    // Only add data that doesn't already exist in the database
    const uniqueData = data.filter((item) => !existingEmails.includes(item.id));
    console.log('uniqueData', uniqueData);
    if (uniqueData.length) {
      await this.db.bookings.bulkAdd(uniqueData);
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
      .toArray();

    this.ongoingBookings = await this.db.bookings
      .where('status')
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
      .toArray();

    this.rejectedBookings = await this.db.bookings
      .where('status')
      .equals('CANCELLED_BY_CUSTOMER')
      .toArray();
  }
}
