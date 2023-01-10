import {
  IBill,
  IBooking,
  ISelectedService,
  ParsedBooking,
  ParsedSelectedService,
} from './interface';

export function parseBookings(bookings: IBooking[]): ParsedBooking[] {
  const parsedBookings: ParsedBooking[] = bookings.map((booking) => {
    return {
      id: booking.id,
      status: booking.status,
      cardData: {
        id: booking.id,
        storeName: booking.store.name,
        date: booking.date,
        selected: false,
      },
      bookingDetails: [
        {
          title: 'Booking id',
          value: booking.id,
        },
        {
          title: 'Customer name',
          value: booking.customer.name,
        },
        {
          title: 'Date',
          value: booking.date,
        },
        {
          title: 'Store name',
          value: booking.store.name,
        },
        {
          title: 'Status',
          value: booking.status,
        },
      ],
      pickUpAndDeliveryDetails: [
        {
          title: 'Pickup partner',
          value: booking.pickupPartnerId || '-',
        },
        {
          title: 'Delivery partner',
          value: booking.deliveryPartnerId || '-',
        },
        {
          title: 'Pickup timeslot',
          value: booking.pickTimeSlot,
        },
        {
          title: 'Delivery timeslot',
          value: booking.deliveryTimeSlot,
        },
        {
          title: 'Pickup address',
          value: Object.values(booking.pickUpAddress).join(','),
        },
        {
          title: 'Delivery address',
          value: Object.values(booking.deliveryAddress).join(','),
        },
      ],
      selectedService: parseSelectedService(booking.services),
      bill: {
        totalServiceAmount: '-',
        deliveryFee: '-',
        tax: '-',
        totalAmount: '-',
      },
    };
  });

  parsedBookings[0].cardData.selected = true;

  return parsedBookings;
}

function parseSelectedService(
  data: ISelectedService[]
): ParsedSelectedService[] {
  return data.map((item) => {
    return {
      name: item.name,
      numberOfItems: item.numberOfItems,
      weight: item.weight?.toString() || '-',
      amount: item.amount?.toString() || '-',
    };
  });
}

export function classifyBookings(bookings: ParsedBooking[]) {
  const pendingBookings: ParsedBooking[] = [];
  const ongoingBookings: ParsedBooking[] = [];
  const outForDeliveryBookings: ParsedBooking[] = [];
  const completedBookings: ParsedBooking[] = [];
  const rejectedBookings: ParsedBooking[] = [];

  bookings.forEach((booking) => {
    switch (booking.status) {
      case 'WAITING_FOR_CONFIRMATION':
        pendingBookings.push(booking);
        break;

      case 'OUT_FOR_PICKUP':
      case 'LAUNDRY_IN_PROGRESS':
        ongoingBookings.push(booking);
        break;

      case 'OUT_FOR_DELIVERY':
        outForDeliveryBookings.push(booking);
        break;

      case 'COMPLETED':
        completedBookings.push(booking);
        break;

      case 'CANCELLED_BY_ADMIN':
      case 'CANCELLED_BY_CUSTOMER':
        rejectedBookings.push(booking);
        break;
    }
  });

  return {
    pendingBookings,
    ongoingBookings,
    outForDeliveryBookings,
    completedBookings,
    rejectedBookings,
  };
}
