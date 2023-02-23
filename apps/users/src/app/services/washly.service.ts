import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { lastValueFrom, map, Observable } from 'rxjs';
import {
  BookingStatus,
  IBooking,
  ICustomer,
  IStore,
} from '../booking/utils/interface';

@Injectable()
export class WashlyService {
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {}

  // create a new user
  async createUser() {
    const email = 'user@example.com';
    const password = 'password';
    try {
      const res = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  // update booking status
  async updateBookingStatus(bookingId: string, status: BookingStatus) {
    console.log('update booking status called:', bookingId, status);
    const bookingRef = this.afs.collection<IBooking>('bookings').doc(bookingId);
    console.log('bookingRef', bookingRef);
    const t = await bookingRef.update({ status });
    console.log('response of update booking', t);
    return t;
  }

  // get bookings from Cloud Firestore
  getBookings(): Observable<Promise<IBooking[]>> | null {
    try {
      const res = this.afs
        .collectionGroup<IBooking>('user_bookings_test')
        .valueChanges()
        .pipe(
          map(async (bookings) => {
            console.log('bookings taken from user_bookings', bookings);
            for (const booking of bookings) {
              const customer$ = this.afs
                .collection<ICustomer>('customers')
                .doc(booking.customerId)
                .get();

              booking.customer = await (await lastValueFrom(customer$)).data();

              const stores$ = this.afs
                .collection<IStore>('stores')
                .doc(booking.storeId)
                .get();
              booking.store = await (await lastValueFrom(stores$)).data();
            }
            return bookings;
          })
        );
      return res;
    } catch (error) {
      console.error('errord at service @ get bookings', error);
      return null;
    }
  }
}
