import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'washly-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css'],
})
export class CampaignComponent {
  items = [
    { name:'Campaign service 1',   icon1:'/assets/edit.png', icon2: '/assets/delete.png',status:'active'},
    { name:'Campaign service 2',   icon1:'/assets/edit.png', icon2: '/assets/delete.png',status:'inactive' },
    { name:'Campaign service 3',   icon1:'/assets/edit.png', icon2: '/assets/delete.png',status:'active' },
    { name:'Campaign service 4',   icon1:'/assets/edit.png', icon2: '/assets/delete.png',status:'active' },
    { name:'Campaign service 5',   icon1:'/assets/edit.png', icon2: '/assets/delete.png',status:'inactive'},
    
  
  ];



 

  constructor(private router: Router) {}
   // eslint-disable-next-line @typescript-eslint/member-ordering
   showDiv = true;

   isModalActive = false;

  openDeleteConfirmationModal() {
    this.isModalActive = true;
    console.log("change modal active status to:" , this.isModalActive)
  }

  closeDeleteConfirmationModal() {
    this.isModalActive = false;
  }

  deleteItem(){
    return
  }



  editing() {
    this.router.navigate(['/campaigneditpage']);
  }
  deleting(){
    this.router.navigate(['/deletebox']);
  }
  service(){
    this.router.navigate(['/servicepage']);
  }
 

}
