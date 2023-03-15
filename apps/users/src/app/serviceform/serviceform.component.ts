import { Component } from '@angular/core';
import { ParsedService } from '../service-page/utils/interface';
import { WashlyService } from '../services/washly.service';

@Component({
  selector: 'washly-serviceform',
  templateUrl: './serviceform.component.html',
  styleUrls: ['./serviceform.component.css'],
})
export class ServiceformComponent {
  addNew: false | undefined;

  displayedData: ParsedService[] | undefined;

  constructor(private ws: WashlyService) {}

  async addService(data: any) {
    console.log('new', data);
    this.addNew = false;

    data = {
      name: data.name,
      category: data.category,
      unitPrice: data.unitPrice,
      unitOfCalculation: data.unitOfCalculation,
    };
    console.log('new service framed', data);
    this.displayedData = data;
    await this.ws.addService(data);
  }
}
