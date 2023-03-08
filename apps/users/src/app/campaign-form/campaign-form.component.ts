import { Component } from '@angular/core';
import { ParsedCampaign } from '../campaign/utils/interface';
import { WashlyService } from '../services/washly.service';

@Component({
  selector: 'washly-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.css'],

})
export class CampaignFormComponent {
  campaign: ParsedCampaign[] | undefined;

  displayedData: ParsedCampaign | undefined;

  
  addNew:false | undefined;
  

  constructor( private ws: WashlyService){}

  calculateStatus(startDate:string, endDate: string): string {
    const startD=new Date(startDate)
    const endD= new Date(endDate)
   const currentDate = new Date();
 
   console.log(currentDate);
   if (
     currentDate.getTime() >= startD.getTime() &&
     currentDate.getTime() <= endD.getTime()
   ) {
     return 'Active';
   } else {
     return 'Inactive';
   }
   
  }
  async addCampaign(data: any) {
    
      console.log('new', data);
      console.log('new campaign', data.status);
      this.addNew = false;
      
      data = {
        heading: data.heading,
        description: data.description,
        buttonLabel: data.buttonLabel,
        imageUrl: data.imageUrl,
        startDate: data.startDate,
        endDate: data.endDate,
      };
      

      console.log('new campaign framed', data);
      this.displayedData = data;
      await this.ws.addCampaign(data);
     
    }
  
}
