import { Component } from '@angular/core';

@Component({
  selector: 'washly-executive',
  templateUrl: './executive.component.html',
  styleUrls: ['./executive.component.css'],
})
export class ExecutiveComponent {

  addNew = false;
  editing = false;


  executives = [
    {
      executivesId: 'X78976TY6546I',
      selected: true,
      cardData: {
        Name: 'Harish',
        no: '9790909162',

      },
      executivesDetails: [
        {
          title: 'Executives name',
          value: 'Harish',
        },
        {
          title: 'Status',
          value: 'Active',
        },
        {
          title: 'Executives ID',
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

    // 2nd executives

    {
      executivesId: 'X78976TY6546I',
      selected: false,
      cardData: {
        Name: 'Abin',
        no: '9987654321',

      },
      executivesDetails: [
        {
          title: 'Executives name',
          value: 'Abin',
        },
        {
          title: 'Status',
          value: 'Active',
        },
        {
          title: 'Executives ID',
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


    // 3rdexecutives

    {
      executivesId: 'X78976TY6546I',
      selected: false,
      cardData: {
        Name: 'Arun',
        no: '1234567890',
        selected: true,
      },
      executivesDetails: [
        {
          title: 'Executives name',
          value: 'Arun',
        },
        {
          title: 'Status',
          value: 'Active',
        },
        {
          title: 'Executives ID',
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


    // 4th executives

    {
      executivesId: 'X78976TY6546I',
      selected: false,
      cardData: {
        Name: 'Madan',
        no: '9234567890',

      },
      executivesDetails: [
        {
          title: 'Executives name',
          value: 'Madan',
        },
        {
          title: 'Status',
          value: 'Active',
        },
        {
          title: 'Executives ID',
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
      executivesId: 'X78976TY6546I',
      selected: false,
      cardData: {
        Name: 'Nivetha',
        no: '1234567890',

      },
      executivesDetails: [
        {
          title: 'Executives name',
          value: 'Nivetha',
        },
        {
          title: 'Status',
          value: 'Active',
        },
        {
          title: 'Executives ID',
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


    //     {
    //     customerId: 'X78976TY6546I',
    //      selected: false,
    //     cardData: {
    //       Name: 'Akash',
    //       no: '1234567890',

    //     },
    //     customerDetails: [
    //       {
    //         title: 'Customer name',
    //         value: 'Akash',
    //       },
    //       {
    //         title: 'Status',
    //         value: 'Active',
    //       },
    //       {
    //         title: 'Customer ID',
    //         value: 'X78976TY6546I',
    //       },
    //       {
    //         title: 'Store name',
    //         value: 'Guduvanchery',
    //       },

    //     ],
    //     contact: [

    //       {
    //         title: 'Phone number',
    //         value: '1234567890',
    //       },


    //     ],
    //     address: [
    //  {
    //         title: 'Home',
    //         value: `14/A, East coast street, South west
    //         Kotturpalayamkotai, Vikasvendra kundramma puram,
    //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
    //       },
    //       {
    //         title: 'Office',
    //         value: `14/A, East coast street, South west
    //         Kotturpalayamkotai, Vikasvendra kundramma puram,
    //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
    //       },
    //     ],
    //   },

    //     {
    //     customerId: 'X78976TY6546I',
    //       selected: false,
    //     cardData: {
    //       Name: 'Tazeen',
    //       no: '1234567890',

    //     },
    //     customerDetails: [
    //       {
    //         title: 'Customer name',
    //         value: 'Tazeen',
    //       },
    //       {
    //         title: 'Status',
    //         value: 'Active',
    //       },
    //       {
    //         title: 'Customer ID',
    //         value: 'X78976TY6546I',
    //       },
    //       {
    //         title: 'Store name',
    //         value: 'Guduvanchery',
    //       },

    //     ],
    //     contact: [

    //       {
    //         title: 'Phone number',
    //         value: '1234567890',
    //       },


    //     ],
    //     address: [
    //  {
    //         title: 'Home',
    //         value: `14/A, East coast street, South west
    //         Kotturpalayamkotai, Vikasvendra kundramma puram,
    //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
    //       },
    //       {
    //         title: 'Office',
    //         value: `14/A, East coast street, South west
    //         Kotturpalayamkotai, Vikasvendra kundramma puram,
    //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
    //       },
    //     ],
    //   },

    //     {
    //     customerId: 'X78976TY6546I',
    //           selected: false,
    //     cardData: {
    //       Name: 'Sam',
    //       no: '1234567890',

    //     },
    //     customerDetails: [
    //       {
    //         title: 'Customer name',
    //         value: 'Sam',
    //       },
    //       {
    //         title: 'Status',
    //         value: 'Active',
    //       },
    //       {
    //         title: 'Customer ID',
    //         value: 'X78976TY6546I',
    //       },
    //       {
    //         title: 'Store name',
    //         value: 'Guduvanchery',
    //       },

    //     ],
    //     contact: [

    //       {
    //         title: 'Phone number',
    //         value: '1234567890',
    //       },


    //     ],
    //     address: [
    //  {
    //         title: 'Home',
    //         value: `14/A, East coast street, South west
    //         Kotturpalayamkotai, Vikasvendra kundramma puram,
    //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
    //       },
    //       {
    //         title: 'Office',
    //         value: `14/A, East coast street, South west
    //         Kotturpalayamkotai, Vikasvendra kundramma puram,
    //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
    //       },
    //     ],
    //   },


  ]


  selectedexecutives = this.executives[0];
  showdetails = false;
  showListElements = false;
  setSelectedexecutives(executives: any) {
    this.executives.forEach((executives) => {
      executives.cardData.selected = false;
    });
    executives.selected = true;
    this.selectedexecutives = executives;
  }


  onSubmit(data: any) {
    this.addNew = false;

    data = {
      name: data.name,
      selected: true,
      dataToDisplay: [
        {
          title: 'Executives name',
          value: data.name,
        },
        {
          title: 'Store name',
          value: data.storename,
        },
        {
          title: 'Phone number',
          value: data.number
        },
        {
          title: 'Address line1',
          value: data.line1,
        },
        {
          title: 'Address line2',
          value: data.line2,
        },
        {
          title: 'Address line3',
          value: data.line3,
        },
        {
          title: 'City',
          value: data.city,
        },
        {
          title: 'State',
          value: data.state,
        },
        {
          title: 'Pincode',
          value: data.pincode,
        },

      ],
    };

    console.log('new service framed', data);
    this.selectedexecutives = data;
    this.executives.push(data);
  }

  addNewService() {
    this.executives.forEach((item) => (item.selected = false));
    this.addNew = true;
  }
  cancelAddForm() {
    this.selectedexecutives = this.executives[0];
    this.selectedexecutives.selected = true;
    this.addNew = false;
  }



}