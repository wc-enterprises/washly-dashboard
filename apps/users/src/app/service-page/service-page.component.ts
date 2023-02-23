import {
  Component,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { IProduct, ParsedService } from './utils/interface';
import { WashlyService } from '../services/washly.service';

@Component({
  selector: 'washly-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css'],
})
export class ServicePageComponent {
  @Output() deletePopUp = new EventEmitter<boolean>();
  @ViewChild('click')
  divElement!: ElementRef;
  isBlurred =false;

  editing = false;
  addNew = false;

  // service = [
  //   {
  //     name: 'Regular wash',
  //     selected: true,
  //     dataToDisplay: [
  //       {
  //         title: 'Name',
  //         value: 'Regular wash',
  //       },
  //       {
  //         title: 'Price per unit',
  //         value: '10',
  //       },
  //       { title: 'Unit of calculation', value: 'Per kg' },
  //     ],
  //   },
  //   {
  //     name: 'Dry wash',
  //     selected: false,
  //     dataToDisplay: [
  //       {
  //         title: 'Name',
  //         value: 'Dry wash',
  //       },
  //       {
  //         title: 'Price per unit',
  //         value: '8',
  //       },
  //       { title: 'Unit of calculation', value: 'Per piece' },
  //     ],
  //   },
  //   {
  //     name: 'Ironing',
  //     selected: false,
  //     dataToDisplay: [
  //       {
  //         title: 'Name',
  //         value: 'Ironing',
  //       },
  //       {
  //         title: 'Price per unit',
  //         value: '10',
  //       },
  //       { title: 'Unit of calculation', value: 'Per kg' },
  //     ],
  //   },
  //   {
  //     name: 'Regular wash & Ironing',
  //     selected: false,
  //     dataToDisplay: [
  //       {
  //         title: 'Name',
  //         value: 'Regular wash & Ironing',
  //       },
  //       {
  //         title: 'Price per unit',
  //         value: '8',
  //       },
  //       { title: 'Unit of calculation', value: 'Per piece' },
  //     ],
  //   },
  // ];
  service: ParsedService[] | undefined;

  displayedData: ParsedService | undefined;

  itemToDelete: any;
  washlyService: any;
  
 
  // displayedData: any = this.service[0];
  // itemToDelete: any;
  // ws: any;
  // loadingData: boolean | undefined;

  constructor(private router: Router, private ws: WashlyService) {}
  isModalActive = false;
 
  loadingData=true;
  currentService: IProduct[] | undefined;
  setSelectedService(data: any) {
   if (this.service) {
      this.service.forEach((item) => {
        item.selected = false;
      });
      data.selected = true;
      this.displayedData = data;
    }
  }

  openDeleteConfirmationModal(item: any) {
    this.itemToDelete = item;
    this.isModalActive = !this.isModalActive;
    this.deletePopUp.emit(true);
    console.log('change modal active status to:', this.isModalActive);
  }

  closeDeleteConfirmationModal() {
    this.isModalActive = false;
  }

  blurDisplayPanel() {
    this.isBlurred = !this.isBlurred;
    this.divElement.nativeElement.style.filter = this.isBlurred
      ? 'blur(5px)'
      : 'none';
  }

  editService() {
    this.editing = true;
  }

  deleteData() {
    if (this.service)
    this.service = this.service.filter(
      (data) => data.name !== this.itemToDelete.name
    );
    this.isModalActive = false;
  }

  save() {
    this.editing = false;
  }
  async addService(data: any) {
    if (this.service) {
      console.log('new', data);
     this.addNew = false;

      data = {
       name: data.name,
       category: data.category,
       unitPrice: data.unitPrice,
        unitOfCalculation: data.unitOfCalculation,
        quantity: data.quantity,
        amount: data.amount,
      };
      

      console.log('new service framed', data);
      this.displayedData = data;
      await this.ws.addCampaign(data);
      this.service.push(data);
    }
  }
  saveServiceData(data: any) {
    this.washlyService.collection('services').add(data);
  }

  // onSubmit(data: any) {
  //   console.log('new', data);
  //   console.log('new service', data.unitOfCalculation);
  //   this.addNew = false;

  //   data = {
  //     name: data.name,
  //     selected: true,
  //     dataToDisplay: [
  //       {
  //         title: 'Name',
  //         value: data.name,
  //       },
  //       {
  //         title: 'Price per unit',
  //         value: data.pricePerUnit,
  //       },
  //       { title: 'Unit of calculation', value: data.unitOfCalculation },
  //     ],
  //   };

  //   console.log('new service framed', data);
  //   this.displayedData = data;
  //   this.service.push(data);
  // }

  addNewService() {
    if (this.service){
    this.service.forEach((item) => (item.selected = false));
    this.addNew = true;
  }
  }
  cancelEditing() {
    console.log('Cancel editing called', this.editing);
    this.editing = false;
  }

  cancelAddForm() {
    if (this.service){
    this.displayedData = this.service[0];
    this.displayedData.selected = true;
    this.addNew = false;
  }
}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
   
     console.log('Loaded ngOnIt of service Component');
    const serviceStream = this.ws.getService();
    console.log('service stream:', serviceStream);
    if (serviceStream) {
      serviceStream.subscribe(async (services: IProduct[]) => {
        console.log('service:', await services);
        if (await services) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          this.service = this.parsedService(await services);
          this.service[0].selected = true;
          this.displayedData = this.service[0];
        }
        this.loadingData = false;
      });
    }
  }

  parsedService(service: IProduct[]): ParsedService[] {
    return service.map((service) => {
      return {
        id: service.id,
        name: service.name,
        selected: false,
        dataToDisplay: [
          {
            title: 'Name',
            value: service.name,
          },
          {
            title: 'Category',
            value: service.category,
          },
          { title: 'UnitPrice', value: service.unitPrice },
          {
            title: 'UnitOfCalculation',
            value: service.unitOfCalculation,
          },
          {
            title: 'Quantity',
            value: service.quantity,
          },
          {
            title: 'Amount',
            value: service.amount,
          },
         
        ],
      };
    });
  }
}
