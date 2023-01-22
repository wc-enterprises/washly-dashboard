import { Component } from '@angular/core';

@Component({
  selector: 'washly-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent {



  customers = [
    {
      customerId: 'X78976TY6546I',
      cardData: {
        Name: 'Harish',
        no: '9790909162',
        selected: true,
      },
      customerDetails: [
        {
          title: 'Customer name',
          value: 'Harish',
        },
        {
          title: 'Status',
          value: 'Active',
        },
        {
          title: 'Customer ID',
          value: 'X78976TY6546I',
        },
        {
          title: 'Store name',
          value: 'Guduvanchery',
        },
       
      ],
      contact: [
       
        {
          title: 'Phone number',
          value: '9790909162',
        },
     
     
      ],
      address: [
   {
          title: 'Home',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
        },
        {
          title: 'Office',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
        },
      ],
    },

    // 2nd customer

     {
      customerId: 'X78976TY6546I',
      cardData: {
        Name: 'Abin',
        no: '9987654321',
        selected: true,
      },
      customerDetails: [
        {
          title: 'Customer name',
          value: 'Abin',
        },
        {
          title: 'Status',
          value: 'Active',
        },
        {
          title: 'Customer ID',
          value: 'X78976TY6546I',
        },
        {
          title: 'Store name',
          value: 'Guduvanchery',
        },
       
      ],
      contact: [
       
        {
          title: 'Phone number',
          value: '9987654321',
        },
     
     
      ],
      address: [
   {
          title: 'Home',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
        },
        {
          title: 'Office',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
        },
      ],
    },


    // 3rdcustomer

     {
      customerId: 'X78976TY6546I',
      cardData: {
        Name: 'Arun',
        no: '1234567890',
        selected: true,
      },
      customerDetails: [
        {
          title: 'Customer name',
          value: 'Arun',
        },
        {
          title: 'Status',
          value: 'Active',
        },
        {
          title: 'Customer ID',
          value: 'X78976TY6546I',
        },
        {
          title: 'Store name',
          value: 'Guduvanchery',
        },
       
      ],
      contact: [
       
        {
          title: 'Phone number',
          value: '1234567890',
        },
     
     
      ],
      address: [
   {
          title: 'Home',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
        },
        {
          title: 'Office',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
        },
      ],
    },


    // 4th customer

     {
      customerId: 'X78976TY6546I',
      cardData: {
        Name: 'Madan',
        no: '9234567890',
        selected: true,
      },
      customerDetails: [
        {
          title: 'Customer name',
          value: 'Madan',
        },
        {
          title: 'Status',
          value: 'Active',
        },
        {
          title: 'Customer ID',
          value: 'X78976TY6546I',
        },
        {
          title: 'Store name',
          value: 'Guduvanchery',
        },
       
      ],
      contact: [
       
        {
          title: 'Phone number',
          value: '9234567890',
        },
     
     
      ],
      address: [
   {
          title: 'Home',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
        },
        {
          title: 'Office',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
        },
      ],
    },

      {
      customerId: 'X78976TY6546I',
      cardData: {
        Name: 'Nivetha',
        no: '1234567890',
        selected: true,
      },
      customerDetails: [
        {
          title: 'Customer name',
          value: 'Nivetha',
        },
        {
          title: 'Status',
          value: 'Active',
        },
        {
          title: 'Customer ID',
          value: 'X78976TY6546I',
        },
        {
          title: 'Store name',
          value: 'Guduvanchery',
        },
       
      ],
      contact: [
       
        {
          title: 'Phone number',
          value: '1234567890',
        },
     
     
      ],
      address: [
   {
          title: 'Home',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
        },
        {
          title: 'Office',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
        },
      ],
    },

  ]
 
   
  selectedcustomer = this.customers[0];







  



  // objects = [
  //   {billTag: 'Total service amount', billAmount: '20',editing:false},
  //   {billTag: 'Delivery charge', billAmount: '20',editing:false},
  //   {billTag: 'GST', billAmount: '20',editing:false},
  //   {billTag: 'Amount', billAmount: '20',editing:false},
  // ]
  // eslint-disable-next-line @typescript-eslint/member-ordering
  
  // eslint-disable-next-line @typescript-eslint/member-ordering
  // showButton = false;
  // toggleButton() {
  //   this.showButton = !this.showButton;
  // }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  showElements = false;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  showListElements = false;
  setSelectedcustomer(customer: any) {
    this.customers.forEach((customer) => {
      customer.cardData.selected = false;
    });
    customer.cardData.selected = true;
    this.selectedcustomer = customer;
  }
}

