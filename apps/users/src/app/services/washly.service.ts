import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { lastValueFrom, map, Observable } from 'rxjs';
import { IBooking, ICustomer, IStore } from '../booking/utils/interface';
import { ICampaign } from '../campaign/utils/interface';
import { v4 as uuidv4 } from 'uuid';


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

  // get data from Cloud Firestore
  getBookings(): Observable<Promise<IBooking[]>> | null {
    try {
      const res = this.afs
        .collection<IBooking>('bookings')
        .valueChanges()
        .pipe(
          map(async (bookings) => {
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

async createCampaign(){
 console.log("Creating new campaign function called.")
 const campaignData ={
  id:`c_${uuidv4()}`,
  heading:"campaign service 1",
  description:"50% OFF",
  buttonLabel:"Get Now",
  imageUrl:"google.com/ice-cream.png.",
  startDate:"18/01/2023",
  endDate:"12/12/2023", 

}
 const res =  await this.afs.collection('campaigns').doc(campaignData.id).set(campaignData);
console.log("CAmpaign saved successfully to firestore and the response is:", res)
}


 getCampaign():Observable<ICampaign[]> | null {

  
      const res = this.afs
        .collection<ICampaign>('campaigns')
        .valueChanges();
             
             return res; 
          }
}
                                                            