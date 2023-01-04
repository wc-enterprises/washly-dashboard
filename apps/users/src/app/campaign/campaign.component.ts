import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ICampaign } from './utils/interface';

@Component({
  selector: 'washly-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css'],
})
export class CampaignComponent {
  @Output() deletePopUp = new EventEmitter<boolean>();

  // items= [
  //   {
  //     name: 'Campaign service 1',
  //     icon1: '/assets/edit.png',
  //     icon2: '/assets/delete.png',
  //     status: 'active',
  //   },
  //   {
  //     name: 'Campaign service 2',
  //     icon1: '/assets/edit.png',
  //     icon2: '/assets/delete.png',
  //     status: 'inactive',
  //   },
  //   {
  //     name: 'Campaign service 3',
  //     icon1: '/assets/edit.png',
  //     icon2: '/assets/delete.png',
  //     status: 'active',
  //   },
  //   {
  //     name: 'Campaign service 4',
  //     icon1: '/assets/edit.png',
  //     icon2: '/assets/delete.png',
  //     status: 'active',
  //   },
  //   {
  //     name: 'Campaign service 5',
  //     icon1: '/assets/edit.png',
  //     icon2: '/assets/delete.png',
  //     status: 'inactive',
  //   },
  // ];
  // objects = [
  //   { title: 'Heading', name: '50% OFFER', editing: false },
  //   {
  //     title: 'Description',
  //     name: 'Grab your offer by using Promo code FIRST',
  //     editing: false,
  //   },
  //   { title: 'Button ', name: 'KNOW MORE', editing: false },
  //   {
  //     title: 'Image URL',
  //     name: 'https://pixabay.com/images/search/nature/',
  //     editing: false,
  //   },
  //   { title: 'Start date', name: '18/10/2022', editing: false },
  //   { title: 'End date', name: '28/10/2022', editing: false },
  //   { title: 'Status', name: 'ACTIVE', editing: false },
  // ];

  campaigns: ICampaign[] = [    
  { id: 'c_usf443_383',heading: 'Campaign service 1', description: '50% OFF', buttonLabel: 'Get Now.', status: 'ACTIVE', imageUrl: 'https://google.com/ice-cream.png',startDate:'03/01/2023',endDate:'10/12/2023',editing:false },
  { id: 'c_usf443_384',heading: 'Campaign service 2', description: '60% OFF', buttonLabel: 'Get Now.', status: 'INACTIVE', imageUrl: 'https://google.com/ice-cream.png',startDate:'03/01/2023',endDate:'10/12/2023',editing:false },
  { id: 'c_usf443_385',heading: 'Campaign service 3', description: '70% OFF', buttonLabel: 'Get Now.', status: 'ACTIVE', imageUrl: 'https://google.com/ice-cream.png',startDate:'03/01/2023',endDate:'10/12/2023',editing:false },
  { id: 'c_usf443_386',heading: 'Campaign service 4',description: '80% OFF', buttonLabel: 'Get Now.', status: 'INACTIVE', imageUrl: 'https://google.com/ice-cream.png',startDate:'03/01/2023',endDate:'10/12/2023',editing:false },
  { id: 'c_usf443_387',heading: 'Campaign service 5', description: '90% OFF', buttonLabel: 'Get Now.', status: 'ACTIVE', imageUrl: 'https://google.com/ice-cream.png',startDate:'03/01/2023',endDate:'10/12/2023',editing:false },
];



  displayedData= this.campaigns[0];

  constructor(private router: Router) {}
  // eslint-disable-next-line @typescript-eslint/member-ordering
  showDiv = true;
  isModalActive = false;

  displayData(data: any) {
    this.displayedData = data;
  }
  @HostListener('document:click')
  toggleBlur() {
    document.body.classList.toggle('blur');
  }

  openDeleteConfirmationModal() {
    this.isModalActive = true;
    this.deletePopUp.emit(true);
    console.log('change modal active status to:', this.isModalActive);
  }

  closeDeleteConfirmationModal() {
    this.isModalActive = false;
  }

  deleteItem() {
    return;
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
  editing = false;
  editText() {
    this.editing = true;
    
  }

  save() {
    this.editing = false;
  }
  
  
}
