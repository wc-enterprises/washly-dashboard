import { Component } from '@angular/core';

@Component({
  selector: 'washly-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
})
export class BookingDetailsComponent {

  editing = false;

  items = [
    { name: 'Dry wash', quantity: 5, weight: '10', amount: 10, editing: false },
    { name: 'Ironing', quantity: 3, weight: '15',amount: 10, editing: false },
    { name: 'Washing', quantity: 3, weight: '15',amount: 10,editing: false },
    { name: 'Washing & Ironing', quantity: 3, weight: '15',amount: 10, editing: false },
    { name: 'Dry wash & Ironing', quantity: 3, weight: '15',amount: 10, editing: false },
    { name: 'Dry wash & Washing', quantity: 3, weight: '15',amount: 10, editing: false },
    { name: 'Dry wash & Ironing & Washing', quantity: 3, weight: '15',amount: 10, editing: false },
    
  ];
  

  // total =0;
   
  // getTotalAmount() {
  //   this.total = 0;
  //   for (const item of this.items) {
  //     this.total += item.amount;
  //   }
  // }
   
 









  // objects = [
  //   {billTag: 'Total service amount', billAmount: '20',editing:false},
  //   {billTag: 'Delivery charge', billAmount: '20',editing:false},
  //   {billTag: 'GST', billAmount: '20',editing:false},
  //   {billTag: 'Amount', billAmount: '20',editing:false},
  // ]
   
  editModeOn() {
    this.editing = true;
  }

  save() {
    this.editing = false;
  }
}



