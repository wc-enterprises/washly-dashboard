export interface ICustomer {
    id : string;
    name : string;
    phoneNumber : string;
    status : string; // ALLOWED || BLOCKED
    addresses ?: IAddress[];
    storeId?: string;
}

export interface IAddress {
    careOf ?: string;
    addressLine1: string;
    addressLine2 ?: string;
    addressLine3 ?: string;
    city: string;
    state: string;
    country: string;
    pincode: number;
}

export interface IStore {
    id : string, 
    name : string , 
    address : IAddress,
    phoneNumber : string,
    status: StoreStatus,   // OPEN || CLOSE
    storeTiming: string, 
    storeWorkingDays: string,
    partnerIds: string[],
    customerIds: string[]
}

export type StoreStatus = 'OPEN' | 
'CLOSED';

export interface IBookings {
    id: string;
    pickTimeSlot: string;
    pickUpAddress: IAddress;
    deliveryAddress: IAddress;
    deliveryTimeSlot: string;
    date: string;
    customerId: string;
    storeId: string;
    status: BookingStatus;
    service: IService[];
    pickupPartnerId ?: string;
    deliveryPartnerId ?: string;
    /**
    * pickUpTimestamp and deliveryTimestamp can be 
    * used later when delivery partner uses the
    * dashboard. 
    */
    pickUpTimestamp ?: string; // next release
    deliveryTimestamp ?: string; // next release 
    bill?: IBill;
   }

   export interface IBill {
    totalServiceAmount: number;
    deliveryFee: number;
    tax: number;
    totalAmount: number;
   }

   export interface IService {
    name: AvailableServices;
    numberOfItems: number;
    weight?: number;
    amount?: number;
 }
  
 export type AvailableServices = 'WASHING' |  
 'IRONING' | 
 'DRY_CLEANING' | 
 'WASH_AND_IRON';

 export type BookingStatus = 
 'WAITING_FOR_CONFIRMATION' |
 'OUT_FOR_PICKUP' |
 'LAUNDRY_IN_PROGRESS' |
 'OUT_FOR_DELIVERY' |
 'COMPLETED';