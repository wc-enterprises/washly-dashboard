
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { lastValueFrom, map, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
// below is the code for bookings interface



export interface ParsedBooking {
    customerId: string;
    selected: boolean;
    cardData: {
        Name: string;
        no: string;
    };
    customerDetails: {
        title: string;
        value: string;
    }[];
    contact: {
        title: string;
        value: string;
    }[];

    address: {
        title: string;
        value: string;
    }[];
}


// eg interface syntax

export interface ICustomer {
    id: string;
    name: any;
    phoneNumber: string;
    status: string; // ALLOWED || BLOCKED
    addresses?: IAddress[];
    storeId?: string;
}


// eg iaddress syntax
export interface IAddress {
    addressLine1: string;
    addressLine2?: string;
    addressLine3?: string;
    city: string;
    state: string;
    country: string;
    pincode: number;
}



@Injectable()
export class WashlyServices {


    constructor(private afs: AngularFirestore) { }


    // get bookings from Cloud Firestore
    getCustomers(): Observable<Promise<ICustomer[]>> | null {
        try {
            const res = this.afs
                .collectionGroup<ICustomer>('customers_data')
                .valueChanges()
                .pipe(
                    map(async (customers) => {
                        console.log('bookings taken from user_bookings', customers);
                        for (const customer of customers) {
                            const customer$ = this.afs
                                .collection<ICustomer>('customers')
                                .doc(customer.id)
                                .get();

                            customer.name = await (await lastValueFrom(customer$)).data();
                        }
                        return customers;
                    }

                    ))
            return res;

        }
        catch (error) {
            console.error('errord at service @ get bookings', error);
            return null;
        }
    }
}
