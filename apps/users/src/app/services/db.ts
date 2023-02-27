import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { ParsedBooking } from '../booking/utils/interface';

@Injectable()
export class AppDB extends Dexie {

  bookings!: Table<ParsedBooking, string>;

  constructor() {
    
    super('washlyData');
    this.version(3).stores({
      bookings: '++id, status',
    });
  }
}
