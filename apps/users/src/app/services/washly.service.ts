import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { lastValueFrom, map, Observable } from 'rxjs';
import { BookingStatus, IBooking, ICustomer, IProduct, IStore } from '../booking/utils/interface';
import { uuidv4} from '@firebase/util';
import { ICampaign } from '../campaign/utils/interface';

@Injectable()
export class WashlyService {
  collection(arg0: string) {
    throw new Error('Method not implemented.');
  }
  group(arg0: {
    name: any;
    description: any;
    status: any;
  }): import('../campaign/utils/interface').ParsedCampaign[] | undefined {
    throw new Error('Method not implemented.');
  }
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

  async createCampaign() {
    console.log('Creating new campaign function called.');
    const campaignData = {
      id: `c_${uuidv4()}`,
      heading: 'campaign service 1',
      description: '50% OFF',
      buttonLabel: 'Get Now',
      imageUrl: 'google.com/ice-cream.png.',
      startDate: '18/01/2023',
      endDate: '12/12/2023',
    };
    const res = await this.afs
      .collection('campaigns')
      .doc(campaignData.id)
      .set(campaignData);
    console.log(
      'Campaign saved successfully to firestore and the response is:',
      res
    );
  }

  getCampaign(): Observable<ICampaign[]> | null {
    const res = this.afs.collection<ICampaign>('campaigns').valueChanges();

    return res;
  }

 async addCampaign(data: ICampaign) {
  console.log("Received request to store campaign")
   const response = await  this.afs
      .collection('campaigns')
      .add(data);
    
  console.log("Firebase response:", response);
     
  }
  async createService() {
    console.log('Creating new service function called.');
    const serviceData = {
      id: `c_${uuidv4()}`,
     name:'dry wash',
     category:'shirt',
     unitPrice:'9',
     unitOfCalculation:'10',
     quantity:'4',
     amount:'6',
    };
    const res = await this.afs
      .collection('service')
      .doc(serviceData.id)
      .set(serviceData);
    console.log(
      'service saved successfully to firestore and the response is:',
      res
    );
  }

  getService(): Observable<IProduct[]> | null {
    const res = this.afs.collection<IProduct>('services').valueChanges();

    return res;
  }

 async addService(data: IProduct) {
  console.log("Received request to store service")
   const response = await  this.afs
      .collection('services')
      .add(data);
    
  console.log("Firebase response:", response);
     
  }

}
