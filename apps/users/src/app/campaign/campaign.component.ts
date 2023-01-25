import {
  Component,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { uuidv4 } from '@firebase/util';


import { WashlyService } from '../services/washly.service';

import { ICampaign,ParsedCampaign } from './utils/interface';

@Component({
  selector: 'washly-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css'],
})
export class CampaignComponent implements OnInit {
  @Output() deletePopUp = new EventEmitter<boolean>();

  isBlurred = false;

  addNew = false;
  editing = false;

  campaign: ParsedCampaign[] | undefined;

  displayedData: ParsedCampaign | undefined;

  itemToDelete: any;
  washlyService: any;

  constructor(private router: Router, private ws: WashlyService) {


 

  }
  loadingData = true;

  isModalActive = false;

  currentCampaign: ICampaign[] | undefined;



  setSelectedcampaign(data: any) {
    if(this.campaign){
    this.campaign.forEach((item) => {
      item.selected = false;
    });
    data.selected = true;
    this.displayedData = data;
  }
  }

  blurDisplayPanel() {
    this.isBlurred = !this.isBlurred;
  }

  removeBlur() {
    this.isBlurred = false;
  }

  deleteData() {
    if(this.campaign){
    this.campaign = this.campaign.filter(
      (data) => data.id !== this.itemToDelete.id
    );
    this.displayedData = this.campaign[0];
    this.isModalActive = false;
    }
  }

  openDeleteConfirmationModal(item: any) {
    this.itemToDelete = item;
    this.isModalActive = !this.isModalActive;
    this.deletePopUp.emit(true);
    console.log('change modal active status to:', this.isModalActive);
  }
  addNewCampaign() {
    if(this.campaign){
   this.campaign.forEach((item) => (item.selected = false));
    this.addNew = true;
    }
  }

  closeDeleteConfirmationModal() {
    this.isModalActive = false;
  }

  // deleteItem() {
  //   return;
  // }
  addCampaign(data: any) {
    if(this.campaign){
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
    if(this.campaign){
    this.displayedData = this.campaign[0];
    this.displayedData.selected = true;
    this.addNew = false;
    }
   }
  // eslint-disable-next-line @typescript-eslint/member-ordering

  ngOnInit() {

  // console.log("Creating a mock campaign");
  // this.ws.createCampaign();



    console.log('Loaded ngOnIt of Campaign Component');
    const campaingsStream = this.ws.getCampaign();
    console.log('Campaign stream:', campaingsStream);
    if (campaingsStream) {
      campaingsStream.subscribe(async (campaigns: ICampaign[]) => {
        
        console.log('campaigns:', await campaigns);
        if (await campaigns) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          this.campaign = this.parsedCampaign(await campaigns);
          this.campaign[0].selected = true;
          this.displayedData = this.campaign[0];
        }
        this.loadingData = false;
      });
    }
  }

  parsedCampaign(campaigns: ICampaign[]):ParsedCampaign[] {
    
    return campaigns.map((campaign) => {
      return {
        id: campaign.id,
        heading: campaign.heading,
        selected: false,
        dataToDisplay: [
          {
            title: 'Heading',
            value: campaign.heading,
          },
          {
            title: 'Description',
            value: campaign.description,
          },
          { title: 'ButtonLabel',
           value: campaign.buttonLabel },
          {
            title: 'ImageUrl',
            value: campaign.imageUrl,
          },
          {
            title: 'StartDate',
            value: campaign.startDate,
          },
          {
            title: 'EndDate',
            value: campaign.endDate,
          },
          {
            title: 'Status',
            value: campaign.status,
          },
        ],

        // heading:campaign.heading,
        // description:campaign.description,
        // buttonLabel:campaign.buttonLabel,
        // imageUrl:campaign.imageUrl,
        // startDate:campaign.startDate,
        // endDate:campaign.endDate,
      };
    });
    
  }
}
function getCampaigns() {
  throw new Error('Function not implemented.');
}

function addCampaign(data: any) {
  throw new Error('Function not implemented.');
}

