
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

interface ICustomer {
    id: string;
    name: string;
    phoneNumber: string;
    status: string; // ALLOWED || BLOCKED
    addresses?: IAddress[];
    storeId?: string;
}


// eg iaddress syntax
interface IAddress {
    addressLine1: string;
    addressLine2?: string;
    addressLine3?: string;
    city: string;
    state: string;
    country: string;
    pincode: number;
}