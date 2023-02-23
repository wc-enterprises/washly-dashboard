export type BookingStatus =
  | 'WAITING_FOR_CONFIRMATION'
  | 'OUT_FOR_PICKUP'
  | 'LAUNDRY_IN_PROGRESS'
  | 'OUT_FOR_DELIVERY'
  | 'COMPLETED'
  | 'CANCELLED_BY_ADMIN'
  | 'CANCELLED_BY_CUSTOMER';

export interface IBooking {
  id: string;
  pickUpTimeSlot: string;
  pickUpAddress: IAddress;
  deliveryAddress: IAddress;
  deliveryTimeSlot: string;
  date: string;
  customer: any;
  store: any;
  customerId: string;
  storeId: string;
  status: BookingStatus;
  products: IProduct[];
  pickupPartnerId?: string;
  deliveryPartnerId?: string;
  deliveryInstructions?: string[];
  /**
   * pickUpTimestamp and deliveryTimestamp can be
   * used later when delivery partner uses the
   * dashboard.
   */
  pickUpTimestamp?: string; // next release
  deliveryTimestamp?: string; // next release
  bill?: IBill;
}

export interface IProduct {
  id: string;
  name: string; // Regular Wash upto 4kg , Detol wash
  category: string; // WASHING, ADDON , DRY_CLEANING
  unitPrice: number;
  unitOfCalculation: string; //"kg | units | sq.ft"
  quantity?: number;
  amount?: number;
}

export interface IAddress {
  label?: string;
  careOf?: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  city: string;
  state: string;
  country: string;
  pincode: number;
}

export interface ISelectedService {
  name: AvailableServices;
  numberOfItems: number;
  weight?: number;
  amount?: number;
}

export interface IBill {
  totalServiceAmount: number;
  deliveryFee: number;
  tax: number;
  totalAmount: number;
}

type AvailableServices =
  | 'WASHING'
  | 'IRONING' //charged per piece
  | 'DRY_CLEANING' //charged per piece
  | 'WASH_AND_IRON';

export interface ParsedBooking {
  id: string;
  status: BookingStatus;
  cardData: {
    customerName: string;
    id: string;
    storeName: string;
    date: string;
    selected: boolean;
  };
  bookingDetails: {
    title: string;
    value: string;
  }[];
  pickUpAndDeliveryDetails: {
    title: string;
    value: string;
  }[];
  selectedService: ParsedSelectedService[];
  bill: {
    totalServiceAmount: string;
    deliveryFee: string;
    tax: string;
    totalAmount: string;
  };
}

export interface ParsedSelectedService {
  name: string;
  category: string;
  unitPrice: number;
  unitOfCalculation: string;
  quantity: string;
  amount: string;
}

export interface ICustomer {
  id: string;
  name: string;
  phoneNumber: string;
  status: string; // ALLOWED || BLOCKED
  addresses?: IAddress[];
  storeId?: string;
}

export interface IStore {
  id: string;
  name: string;
  address: IAddress;
  phoneNumber: string;
  status: StoreStatus; // OPEN || CLOSE
  storeTiming: string;
  storeWorkingDays: string;
}

type StoreStatus = 'OPEN' | 'CLOSED';
/**
 * 
 * 'Booking id' | 'Customer name' | 'Date' | 'Store name' | 'Status';
 * 
 * 
 *   | 'Pickup partner'
      | 'Delivery partner'
      | 'Pickup timeslot'
      | 'Delivery timeslot'
      | 'Pickup address'
      | 'Delivery address';
 */
