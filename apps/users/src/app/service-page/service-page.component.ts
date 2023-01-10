import { Component, Output, EventEmitter, HostListener,ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'washly-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css'],
})
export class ServicePageComponent {
  @Output() deletePopUp = new EventEmitter<boolean>();
   @ViewChild('click')
  divElement!: ElementRef;
   isBlurred = true;

  editing = false;
  addNew = false;

  service = [
    {
      name: 'Regular wash',
      selected: true,
      dataToDisplay: [
        {
          title: 'Name',
          value: 'Regular wash',
        },
        {
          title: 'Price per unit',
          value: '10',
        },
        { title: 'Unit of calculation', value: 'Per kg' },
      ],
    },
    {
      name: 'Dry wash',
      selected: false,
      dataToDisplay: [
        {
          title: 'Name',
          value: 'Dry wash',
        },
        {
          title: 'Price per unit',
          value: '8',
        },
        { title: 'Unit of calculation', value: 'Per piece' },
      ],
    },
    {
      name: 'Ironing',
      selected: false,
      dataToDisplay: [
        {
          title: 'Name',
          value: 'Ironing',
        },
        {
          title: 'Price per unit',
          value: '10',
        },
        { title: 'Unit of calculation', value: 'Per kg' },
      ],
    },
    {
      name: 'Regular wash & Ironing',
      selected: false,
      dataToDisplay: [
        {
          title: 'Name',
          value: 'Regular wash & Ironing',
        },
        {
          title: 'Price per unit',
          value: '8',
        },
        { title: 'Unit of calculation', value: 'Per piece' },
      ],
    },
  ];

  displayedData: any = this.service[0];

  constructor(private router: Router) {}
  isModalActive = false;

  setSelectedBooking(data: any) {
    this.service.forEach((item) => (item.selected = false));
    data.selected = true;
    this.displayedData = data;
  }
  
  ngAfterViewInit() {
     this.isBlurred = !this.isBlurred;
  this.divElement.nativeElement.style.filter = this.isBlurred ? 'blur(5px)' : 'none';
  };

  openDeleteConfirmationModal() {
    this.isModalActive = !this.isModalActive;
    this.deletePopUp.emit(true);
    console.log('change modal active status to:', this.isModalActive);
  }

  closeDeleteConfirmationModal() {
    this.isModalActive = false;
  }

  deleteItem() {
    return;
  }

  @HostListener('document:click')
  toggleBlur() {
    document.body.classList.toggle('blur');
  }

  editService() {
    this.editing = true;
  }

  save() {
    this.editing = false;
  }
  onSubmit(data: any) {
    console.log('new', data);
    console.log('new service', data.unitOfCalculation);
    this.addNew = false;

    data = {
      name: data.name,
      selected: true,
      dataToDisplay: [
        {
          title: 'Name',
          value: data.name,
        },
        {
          title: 'Price per unit',
          value: data.pricePerUnit,
        },
        { title: 'Unit of calculation', value: data.unitOfCalculation },
      ],
    };

    console.log('new service framed', data);
    this.displayedData = data;
    this.service.push(data);
  }

  addNewService() {
    this.service.forEach((item) => (item.selected = false));
    this.addNew = true;
  }

  cancelEditing() {
    console.log('Cancel editing called', this.editing);
    this.editing = false;
  }

  cancelAddForm() {
    this.displayedData = this.service[0];
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
