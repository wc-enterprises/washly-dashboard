import {
  Component,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'washly-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css'],
})
export class CampaignComponent {
  @Output() deletePopUp = new EventEmitter<boolean>();

  isBlurred = false;

  addNew = false;
  editing = false;

  campaign = [
    {
      id: 'c_usf443_383',
      heading: 'Campaign service 1',
      selected: true,
      dataToDisplay: [
        {
          title: 'Heading',
          value: 'Campaign service 1',
        },
        {
          title: 'Description',
          value: '50% OFF',
        },
        { title: 'ButtonLabel', value: 'Get Now.' },
        {
          title: 'ImageUrl',
          value: 'Get https://google.com/ice-cream.png.',
        },
        {
          title: 'StartDate',
          value: '03/01/2023',
        },
        {
          title: 'EndDate',
          value: '03/01/2023',
        },
        {
          title: 'Status',
          value: 'ACTIVE',
        },
      ],
    },
    {
      id: 'c_usf443_384',
      heading: 'Campaign service 2',
      selected: false,
      dataToDisplay: [
        {
          title: 'Heading',
          value: 'Campaign service 2',
        },
        {
          title: 'Description',
          value: '60% OFF',
        },
        { title: 'ButtonLabel', value: 'Get Now.' },
        {
          title: 'ImageUrl',
          value: 'Get https://google.com/ice-cream.png.',
        },
        {
          title: 'StartDate',
          value: '03/01/2023',
        },
        {
          title: 'EndDate',
          value: '03/01/2023',
        },
        {
          title: 'Status',
          value: 'INACTIVE',
        },
      ],
    },
    {
      id: 'c_usf443_385',
      heading: 'Campaign service 3',
      selected: false,
      dataToDisplay: [
        {
          title: 'Heading',
          value: 'Campaign service 3',
        },
        {
          title: 'Description',
          value: '70% OFF',
        },
        { title: 'ButtonLabel', value: 'Get Now.' },
        {
          title: 'ImageUrl',
          value: 'Get https://google.com/ice-cream.png.',
        },
        {
          title: 'StartDate',
          value: '03/01/2023',
        },
        {
          title: 'EndDate',
          value: '03/01/2023',
        },
        {
          title: 'Status',
          value: 'ACTIVE',
        },
      ],
    },
    {
      id: 'c_usf443_386',
      heading: 'Campaign service 4',
      selected: false,
      dataToDisplay: [
        {
          title: 'Heading',
          value: 'Campaign service 4',
        },
        {
          title: 'Description',
          value: '70% OFF',
        },
        { title: 'ButtonLabel', value: 'Get Now.' },
        {
          title: 'ImageUrl',
          value: 'Get https://google.com/ice-cream.png.',
        },
        {
          title: 'StartDate',
          value: '03/01/2023',
        },
        {
          title: 'EndDate',
          value: '03/01/2023',
        },
        {
          title: 'Status',
          value: 'INACTIVE',
        },
      ],
    },
    {
      id: 'c_usf443_385',
      heading: 'Campaign service 5',
      selected: false,
      dataToDisplay: [
        {
          title: 'Heading',
          value: 'Campaign service 5',
        },
        {
          title: 'Description',
          value: '80% OFF',
        },
        { title: 'ButtonLabel', value: 'Get Now.' },
        {
          title: 'ImageUrl',
          value: 'Get https://google.com/ice-cream.png.',
        },
        {
          title: 'StartDate',
          value: '03/01/2023',
        },
        {
          title: 'EndDate',
          value: '03/01/2023',
        },
        {
          title: 'Status',
          value: 'ACTIVE',
        },
      ],
    },
  ];

  displayedData = this.campaign[0];
  itemToDelete: any;

  constructor(private router: Router) {}
  isModalActive = false;

  setSelectedBooking(data: any) {
    this.campaign.forEach((item) => {
      item.selected = false;
    });
    data.selected = true;
    this.displayedData = data;
  }

  blurDisplayPanel() {
    this.isBlurred = true;
  }

  removeBlur() {
    this.isBlurred = false;
  }

  deleteData() {
    this.campaign = this.campaign.filter((data) => data.id !== this.itemToDelete.id);
     this.isModalActive = false;
  }

  openDeleteConfirmationModal(item: any) {
    this.itemToDelete = item;
    this.isModalActive = !this.isModalActive;
    this.deletePopUp.emit(true);
    console.log('change modal active status to:', this.isModalActive);
  }
  addNewCampaign() {
    this.campaign.forEach((item) => (item.selected = false));
    this.addNew = true;
  }

  closeDeleteConfirmationModal() {
    this.isModalActive = false;
  }

  // deleteItem() {
  //   return;
  // }
  onSubmit(data: any) {
    console.log('new', data);
    console.log('new campaign', data.status);
    this.addNew = false;

    data = {
      heading: data.heading,
      selected: true,
      dataToDisplay: [
        {
          title: 'Heading',
          value: data.heading,
        },
        {
          title: 'Description',
          value: data.description,
        },
        { title: 'ButtonLabel', value: data.buttonLabel },
        { title: 'ImageUrl', value: data.imageUrl },
        { title: 'StartDate', value: data.startDate },
        { title: 'EndDate', value: data.EndDate },
        { title: 'Status', value: data.status },
      ],
    };

    console.log('new campaign framed', data);
    this.displayedData = data;
    this.campaign.push(data);
  }
  // editing() {
  //   this.router.navigate(['/campaigneditpage']);
  // }
  deleting() {
    this.router.navigate(['/deletebox']);
  }
  service() {
    this.router.navigate(['/servicepage']);
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering

  editCampaign() {
    this.editing = true;
  }

  save() {
    this.editing = false;
  }
  cancelEditing() {
    console.log('Cancel editing called', this.editing);
    this.editing = false;
  }

  cancelAddForm() {
    this.displayedData = this.campaign[0];
    this.displayedData.selected = true;
    this.addNew = false;
  }
}
