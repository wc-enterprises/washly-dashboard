import {
  Component,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ICampaign } from './utils/interface';

@Component({
  selector: 'washly-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css'],
})
export class CampaignComponent {
  @Output() deletePopUp = new EventEmitter<boolean>();
  @ViewChild('click')
  divElement!: ElementRef;
  isBlurred = true;

  //    campaigns: ICampaign[] = [
  //   { id: 'c_usf443_383',heading: 'Campaign service 1', description: '50% OFF', buttonLabel: 'Get Now.', status: 'ACTIVE', imageUrl: 'https://google.com/ice-cream.png',startDate:'03/01/2023',endDate:'10/12/2023'},
  //   { id: 'c_usf443_384',heading: 'Campaign service 2', description: '60% OFF', buttonLabel: 'Get Now.', status: 'INACTIVE', imageUrl: 'https://google.com/ice-cream.png',startDate:'03/01/2023',endDate:'10/12/2023'},
  //   { id: 'c_usf443_385',heading: 'Campaign service 3', description: '70% OFF', buttonLabel: 'Get Now.', status: 'ACTIVE', imageUrl: 'https://google.com/ice-cream.png',startDate:'03/01/2023',endDate:'10/12/2023'},
  //   { id: 'c_usf443_386',heading: 'Campaign service 4',description: '80% OFF', buttonLabel: 'Get Now.', status: 'INACTIVE', imageUrl: 'https://google.com/ice-cream.png',startDate:'03/01/2023',endDate:'10/12/2023'},
  //   { id: 'c_usf443_387',heading: 'Campaign service 5', description: '90% OFF', buttonLabel: 'Get Now.', status: 'ACTIVE', imageUrl: 'https://google.com/ice-cream.png',startDate:'03/01/2023',endDate:'10/12/2023'}
  // ];

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
      selected: true,
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
      selected: true,
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
      selected: true,
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
      selected: true,
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

  displayedData: any = this.campaign[0];

  constructor(private router: Router) {}
  isModalActive = false;

  setSelectedBooking(data: any) {
    this.campaign.forEach((item) => (item.selected = false));
    data.selected = true;
    this.displayedData = data;
  }

  @HostListener('document:click')
  toggleBlur() {
    document.body.classList.toggle('blur');
  }

  ngAfterViewInit() {
    this.isBlurred = !this.isBlurred;
    this.divElement.nativeElement.style.filter = this.isBlurred
      ? 'blur(5px)'
      : 'none';
  }

  openDeleteConfirmationModal() {
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

  deleteItem() {
    return;
  }
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

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    // console.log(event.target);
    // console.log(document.getElementById('edit-icon'));
    // if (this.editing && event.target !== document.getElementById('edit-icon')) {
    //   if (event.target !== document.getElementById('save-button')) {
    //     this.editing = false;
    //   }
    // }
  }
}
