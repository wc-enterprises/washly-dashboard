import { Component, Input, OnChanges } from '@angular/core';
import { BookingStatus, ParsedBooking } from '../../booking/utils/interface';
import { WashlyService } from '../../services/washly.service';

type Tab =
  | 'PENDING'
  | 'ONGOING'
  | 'OUT_FOR_DELIVERY'
  | 'COMPLETED'
  | 'REJECTED';

@Component({
  selector: 'washly-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
})
export class BookingDetailsComponent implements OnChanges {
  @Input()
  bookings: ParsedBooking[] | undefined;

  @Input() tab: Tab | undefined;

  selectedBooking: ParsedBooking | undefined;

  showElements = false;
  showListElements = false;

  displayedColumns = [
    'serviceName',
    'category',
    'unitPrice',
    'unitOfCalculation',
    'quantity',
    'amount',
  ];

  editMode = false;

  partner: string[] = [
    'Arunkumar',
    'Abinpaul',
    'Aniruth',
    'Dhoni',
    'Madhan',
    'Siva',
    'Siva Ram',
  ];

  total = 0;

  ngOnChanges() {
    if (this.bookings && this.bookings.length != 0) {
      this.selectedBooking = this.bookings[0];
    }
  }

  constructor(private ws: WashlyService) {}

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

  deleteBooking() {
    this.total = 90;
  }

  save() {
    this.editMode = false;
  }

  setSelectedBooking(booking: any) {
    if (this.bookings) {
      this.bookings.forEach((booking) => {
        booking.cardData.selected = false;
      });
      booking.cardData.selected = true;
      this.selectedBooking = booking;
      console.log('currently selected booking:', this.selectedBooking);
    }
  }

  updateBookingStatus(id: string, status: BookingStatus) {
    this.ws.updateBookingStatus(id, status);
  }
}
