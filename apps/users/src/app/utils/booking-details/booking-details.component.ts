import { Component } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'washly-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
})
export class BookingDetailsComponent {
  bookings = [
    {
      bookingId: 'X78976TY6546I',
      cardData: {
        bookingId: 'X78976TY6546I',
        storeName: 'Guduvanchery washly',
        date: '2/1/2023',
        selected: true,
      },
      bookingDetails: [
        {
          title: 'Booking id',
          value: 'X78976TY6546I',
        },
        {
          title: 'Customer name',
          value: 'Sivaraman S',
        },
        {
          title: 'Date',
          value: '2/1/2023',
        },
        {
          title: 'Store name',
          value: 'Guduvanchery washly',
        },
        {
          title: 'Status',
          value: 'PENDING APPROVAL',
        },
      ],
      pickUpAndDeliveryDetails: [
        {
          title: 'Pickup partner',
          value: 'Santhosh',
        },
        {
          title: 'Delivery partner',
          value: 'Ramesh',
        },
        {
          title: 'Pickup timeslot',
          value: '8AM - 10AM',
        },
        {
          title: 'Delivery timeslot',
          value: '8AM - 10AM',
        },
        {
          title: 'Pickup address',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
        },
        {
          title: 'Delivery address',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
        },
      ],
      selectedService: [
        {
          name: 'Regular Wash',
          numberOfItems: 7,
          weight: '12kg',
          amount: null,
        },
        {
          name: 'Ironing',
          numberOfItems: 7,
          weight: null,
          amount: null,
        },
        {
          name: 'Dry Wash',
          numberOfItems: 7,
          weight: '12kg',
          amount: null,
        },
      ],
      bill: {
        totalServiceAmount: null,
        deliveryFee: null,
        tax: null,
        totalAmount: null,
      },
    },
    {
      bookingId: '1234567890',
      cardData: {
        bookingId: '1234567890',
        storeName: 'Urapakam washly',
        date: '3/1/2023',
        selected: false,
      },
      bookingDetails: [
        {
          title: 'Booking id',
          value: '1234567890X78976TY6546I',
        },
        {
          title: 'Customer name',
          value: 'Abin',
        },
        {
          title: 'Date',
          value: '3/1/2023',
        },
        {
          title: 'Store name',
          value: 'Urapakam washly',
        },
        {
          title: 'Status',
          value: 'PENDING APPROVAL',
        },
      ],
      pickUpAndDeliveryDetails: [
        {
          title: 'Pickup partner',
          value: 'Santhosh',
        },
        {
          title: 'Delivery partner',
          value: 'Ramesh',
        },
        {
          title: 'Pickup timeslot',
          value: '8AM - 10AM',
        },
        {
          title: 'Delivery timeslot',
          value: '8AM - 10AM',
        },
        {
          title: 'Pickup address',
          value: `14/A, East street, West
          kottaram, V.k Puram,
          Tirunelveli. 627422  `,
        },
        {
          title: 'Delivery address',
          value: `14/A, East street, West
          kottaram, V.k Puram,
          Tirunelveli. 627422  `,
        },
      ],
      selectedService: [
        {
          name: 'Regular Wash',
          numberOfItems: 7,
          weight: '12kg',
          amount: null,
        },
        {
          name: 'Ironing',
          numberOfItems: 7,
          weight: null,
          amount: null,
        },
        {
          name: 'Dry Wash',
          numberOfItems: 7,
          weight: '12kg',
          amount: null,
        },
      ],
      bill: {
        totalServiceAmount: null,
        deliveryFee: null,
        tax: null,
        totalAmount: null,
      },
    },
    {
      bookingId: 'qwertyuiop',
      cardData: {
        bookingId: 'qwertyuiop',
        storeName: 'Vandaloor washly',
        date: '4/1/2023',
        selected: false,
      },
      bookingDetails: [
        {
          title: 'Booking id',
          value: 'qwertyuiop',
        },
        {
          title: 'Customer name',
          value: 'Arun kumar',
        },
        {
          title: 'Date',
          value: '4/1/2023',
        },
        {
          title: 'Store name',
          value: 'Vandaloor washly',
        },
        {
          title: 'Status',
          value: 'PENDING APPROVAL',
        },
      ],
      pickUpAndDeliveryDetails: [
        {
          title: 'Pickup partner',
          value: 'Santhosh',
        },
        {
          title: 'Delivery partner',
          value: 'Ramesh',
        },
        {
          title: 'Pickup timeslot',
          value: '8AM - 10AM',
        },
        {
          title: 'Delivery timeslot',
          value: '8AM - 10AM',
        },
        {
          title: 'Pickup address',
          value: `14/A, East street, West
          kottaram, V.k Puram,
          Tirunelveli. 627422  `,
        },
        {
          title: 'Delivery address',
          value: `14/A, East street, West
          kottaram, V.k Puram,
          Tirunelveli. 627422  `,
        },
      ],
      selectedService: [
        {
          name: 'Regular Wash',
          numberOfItems: 7,
          weight: '12kg',
          amount: null,
        },
        {
          name: 'Ironing',
          numberOfItems: 7,
          weight: null,
          amount: null,
        },
        {
          name: 'Dry Wash',
          numberOfItems: 7,
          weight: '12kg',
          amount: null,
        },
      ],
      bill: {
        totalServiceAmount: null,
        deliveryFee: null,
        tax: null,
        totalAmount: null,
      },
    },
    {
      bookingId: 'asdfghjkl',
      cardData: {
        bookingId: 'asdfghjkl',
        storeName: 'Perungulatur washly',
        date: '5/1/2023',
        selected: false,
      },
      bookingDetails: [
        {
          title: 'Booking id',
          value: 'asdfghjkl',
        },
        {
          title: 'Customer name',
          value: 'Mathan',
        },
        {
          title: 'Date',
          value: '5/1/2023',
        },
        {
          title: 'Store name',
          value: 'Perungulatur washly',
        },
        {
          title: 'Status',
          value: 'PENDING APPROVAL',
        },
      ],
      pickUpAndDeliveryDetails: [
        {
          title: 'Pickup partner',
          value: 'Santhosh',
        },
        {
          title: 'Delivery partner',
          value: 'Ramesh',
        },
        {
          title: 'Pickup timeslot',
          value: '8AM - 10AM',
        },
        {
          title: 'Delivery timeslot',
          value: '8AM - 10AM',
        },
        {
          title: 'Pickup address',
          value: `14/A, East street, West
          kottaram, V.k Puram,
          Tirunelveli. 627422  `,
        },
        {
          title: 'Delivery address',
          value: `14/A, East street, West
          kottaram, V.k Puram,
          Tirunelveli. 627422  `,
        },
      ],
      selectedService: [
        {
          name: 'Regular Wash',
          numberOfItems: 7,
          weight: '12kg',
          amount: null,
        },
        {
          name: 'Ironing',
          numberOfItems: 7,
          weight: null,
          amount: null,
        },
        {
          name: 'Dry Wash',
          numberOfItems: 7,
          weight: '12kg',
          amount: null,
        },
      ],
      bill: {
        totalServiceAmount: null,
        deliveryFee: null,
        tax: null,
        totalAmount: null,
      },
    },
    {
      bookingId: 'zxcvbnmm',
      cardData: {
        bookingId: 'zxcvbnm',
        storeName: 'Guduvanchery washly',
        date: '2/1/2023',
        selected: false,
      },
      bookingDetails: [
        {
          title: 'Booking id',
          value: 'zxcvbnm',
        },
        {
          title: 'Customer name',
          value: 'Abe',
        },
        {
          title: 'Date',
          value: '6/1/2023',
        },
        {
          title: 'Store name',
          value: 'Tambaram washly',
        },
        {
          title: 'Status',
          value: 'PENDING APPROVAL',
        },
      ],
      pickUpAndDeliveryDetails: [
        {
          title: 'Pickup partner',
          value: 'Santhosh',
        },
        {
          title: 'Delivery partner',
          value: 'Ramesh',
        },
        {
          title: 'Pickup timeslot',
          value: '8AM - 10AM',
        },
        {
          title: 'Delivery timeslot',
          value: '8AM - 10AM',
        },
        {
          title: 'Pickup address',
          value: `14/A, East street, West
          kottaram, V.k Puram,
          Tirunelveli. 627422  `,
        },
        {
          title: 'Delivery address',
          value: `14/A, East street, West
          kottaram, V.k Puram,
          Tirunelveli. 627422  `,
        },
      ],
      selectedService: [
        {
          name: 'Regular Wash',
          numberOfItems: 7,
          weight: '12kg',
          amount: null,
        },
        {
          name: 'Ironing',
          numberOfItems: 7,
          weight: null,
          amount: null,
        },
        {
          name: 'Dry Wash',
          numberOfItems: 7,
          weight: '12kg',
          amount: null,
        },
      ],
      bill: {
        totalServiceAmount: null,
        deliveryFee: null,
        tax: null,
        totalAmount: null,
      },
    },
    {
      bookingId: 'X78976TY6546I',
      cardData: {
        bookingId: 'X78976TY6546I',
        storeName: 'Guduvanchery washly',
        date: '2/1/2023',
        selected: false,
      },
      bookingDetails: [
        {
          title: 'Booking id',
          value: 'X78976TY6546I',
        },
        {
          title: 'Customer name',
          value: 'Sivaraman S',
        },
        {
          title: 'Date',
          value: '2/1/2023',
        },
        {
          title: 'Store name',
          value: 'Guduvanchery washly',
        },
        {
          title: 'Status',
          value: 'PENDING APPROVAL',
        },
      ],
      pickUpAndDeliveryDetails: [
        {
          title: 'Pickup partner',
          value: 'Santhosh',
        },
        {
          title: 'Delivery partner',
          value: 'Ramesh',
        },
        {
          title: 'Pickup timeslot',
          value: '8AM - 10AM',
        },
        {
          title: 'Delivery timeslot',
          value: '8AM - 10AM',
        },
        {
          title: 'Pickup address',
          value: `14/A, East street, West
          kottaram, V.k Puram,
          Tirunelveli. 627422  `,
        },
        {
          title: 'Delivery address',
          value: `14/A, East street, West
          kottaram, V.k Puram,
          Tirunelveli. 627422  `,
        },
      ],
      selectedService: [
        {
          name: 'Regular Wash',
          numberOfItems: 7,
          weight: '12kg',
          amount: null,
        },
        {
          name: 'Ironing',
          numberOfItems: 7,
          weight: null,
          amount: null,
        },
        {
          name: 'Dry Wash',
          numberOfItems: 7,
          weight: '12kg',
          amount: null,
        },
      ],
      bill: {
        totalServiceAmount: null,
        deliveryFee: null,
        tax: null,
        totalAmount: null,
      },
    },
  ];
  selectedBooking = this.bookings[0];

  editing = false;

  totalServiceAmount: any ;

  items = [
    { name: 'Dry wash', quantity: 5, weight: '10', amount: 10, editing: false },
    { name: 'Ironing', quantity: 3, weight: '15', amount: 10, editing: false },
    { name: 'Washing', quantity: 3, weight: '15', amount: 10, editing: false },
    {
      name: 'Washing & Ironing',
      quantity: 3,
      weight: '15',
      amount: 10,
      editing: false,
    },
    {
      name: 'Dry wash & Ironing',
      quantity: 3,
      weight: '15',
      amount: 10,
      editing: false,
    },
    {
      name: 'Dry wash & Washing',
      quantity: 3,
      weight: '15',
      amount: 10,
      editing: false,
    },
    {
      name: 'Dry wash & Ironing & Washing',
      quantity: 3,
      weight: '15',
      amount: 10,
      editing: false,
    },
  ];

  total =0;

  getTotalAmount() {
    this.total = 0;
    for (const item of this.items) {
      this.total += item.amount;
    }
  }

  // objects = [
  //   {billTag: 'Total service amount', billAmount: '20',editing:false},
  //   {billTag: 'Delivery charge', billAmount: '20',editing:false},
  //   {billTag: 'GST', billAmount: '20',editing:false},
  //   {billTag: 'Amount', billAmount: '20',editing:false},
  // ]
// eslint-disable-next-line @typescript-eslint/member-ordering
text= 'Arun';
  editModeOn() {
    this.editing = true;
  }

  save() {
    this.editing = false;
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  // showButton = false;
  // toggleButton() {
  //   this.showButton = !this.showButton;
  // }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  showElements = false;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  showListElements = false;
  setSelectedBooking(booking: any) {
    this.bookings.forEach((booking) => {
      booking.cardData.selected = false;
    });
    booking.cardData.selected = true;
    this.selectedBooking = booking;
  }
}
