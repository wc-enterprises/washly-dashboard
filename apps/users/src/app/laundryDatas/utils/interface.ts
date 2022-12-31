export interface ICustomer {
id : string;
     name : string;
     phoneNumber : string;
     status : string; // ALLOWED || BLOCKED
     addresses?: IAddress[];
     storeId?: string;
}
export interface IAddress{
     careOf?: string;
   addressLine1: string;
   addressLine2?: string;
   addressLine3?: string;
   city: string;
   state: string;
   country: string;
   pincode: number;
}
export interface IStore{

    id : string, 
    name : string, 
    address : IAddress,
    phoneNumber : string,
    status: StoreStatus,   // OPEN || CLOSE
    storeTiming: string, 
    storeWorkingDays: string,
    partnerIds: string[],
    customerIds: string[]

}
export interface IBooking{
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
export interface IUser{
     id : string;
    name : string;
    username: string;
    password: string;
    role: IRole;
    phoneNumber : string;
    proofUrls ?: string[];
    storeIds ?: string[];
}