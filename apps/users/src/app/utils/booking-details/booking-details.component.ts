import { Component } from '@angular/core';

@Component({
  selector: 'washly-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
})
export class BookingDetailsComponent {
  dataSource = [
    { serviceName: 'Laundry', noOfItems: 20, weightOfItems: 10, amount: 200 },
  ];

  displayedColumns = ['serviceName', 'noOfItems', 'weightOfItems', 'amount'];

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
          weight: '12',
          amount: '122',
        },
        {
          name: 'Ironing',
          numberOfItems: 7,
          weight: '21',
          amount: '232',
        },
        {
          name: 'Dry Wash',
          numberOfItems: 7,
          weight: '12',
          amount: '121',
        },
        {
          name: 'Regular Wash',
          numberOfItems: 7,
          weight: '12',
          amount: '122',
        },
        {
          name: 'Ironing',
          numberOfItems: 7,
          weight: '21',
          amount: '232',
        },
        {
          name: 'Dry Wash',
          numberOfItems: 7,
          weight: '12',
          amount: '121',
        },
        {
          name: 'Regular Wash',
          numberOfItems: 7,
          weight: '12',
          amount: '122',
        },
        {
          name: 'Ironing',
          numberOfItems: 7,
          weight: '21',
          amount: '232',
        },
        {
          name: 'Dry Wash',
          numberOfItems: 7,
          weight: '12',
          amount: '121',
        },
        {
          name: 'Regular Wash',
          numberOfItems: 7,
          weight: '12',
          amount: '122',
        },
        {
          name: 'Ironing',
          numberOfItems: 7,
          weight: '21',
          amount: '232',
        },
        {
          name: 'Dry Wash',
          numberOfItems: 7,
          weight: '12',
          amount: '121',
        },
        {
          name: 'Regular Wash',
          numberOfItems: 7,
          weight: '12',
          amount: '122',
        },
        {
          name: 'Ironing',
          numberOfItems: 7,
          weight: '21',
          amount: '232',
        },
        {
          name: 'Dry Wash',
          numberOfItems: 7,
          weight: '12',
          amount: '121',
        },
        {
          name: 'Regular Wash',
          numberOfItems: 7,
          weight: '12',
          amount: '122',
        },
        {
          name: 'Ironing',
          numberOfItems: 7,
          weight: '21',
          amount: '232',
        },
        {
          name: 'Dry Wash',
          numberOfItems: 7,
          weight: '12',
          amount: '121',
        },
      ],
      bill: {
        totalServiceAmount: '342',
        deliveryFee: '50',
        tax: '23',
        totalAmount: '415',
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
          value: 'thambaram washly',
        },
        {
          title: 'Status',
          value: 'PENDING APPROVAL',
        },
      ],
      pickUpAndDeliveryDetails: [
       
        {
          title: 'Pickup timeslot',
          value: '8AM - 10AM',
        },
        {
          title: 'Delivery timeslot',
          value: '10AM - 12AM',
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
          weight: '12',
          amount: '122',
        },
        {
          name: 'Ironing',
          numberOfItems: 7,
          weight: '21',
          amount: '232',
        },
        {
          name: 'Dry Wash',
          numberOfItems: 7,
          weight: '12',
          amount: '121',
        },
      ],
      bill: {
        totalServiceAmount: '342',
        deliveryFee: '50',
        tax: '23',
        totalAmount: '415',
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
          weight: '12',
          amount: '122',
        },
        {
          name: 'Ironing',
          numberOfItems: 7,
          weight: '21',
          amount: '232',
        },
        {
          name: 'Dry Wash',
          numberOfItems: 7,
          weight: '12',
          amount: '121',
        },
      ],
      bill: {
        totalServiceAmount: '342',
        deliveryFee: '50',
        tax: '23',
        totalAmount: '415',
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
          weight: '12',
          amount: '122',
        },
        {
          name: 'Ironing',
          numberOfItems: 7,
          weight: '21',
          amount: '232',
        },
        {
          name: 'Dry Wash',
          numberOfItems: 7,
          weight: '12',
          amount: '121',
        },
      ],
      bill: {
        totalServiceAmount: '342',
        deliveryFee: '50',
        tax: '23',
        totalAmount: '415',
      },
    },
  ];
  selectedBooking = this.bookings[0];

  editMode = false;

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

  partner: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
  ];




  total = 0;

  ngOnIt() {
    this.dataSource.forEach((item) => {
      if (!item.weightOfItems) item.weightOfItems = 0 as any;
    });
  }

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
  text = 'Arun';
  editModeOn() {
    this.editMode = true;
  }

  editModeOff() {
    this.editMode = false;
  }

  save() {
    this.editMode = false;
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
