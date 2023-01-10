import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'washly-campaign-editpage',
  templateUrl: './campaign-editpage.component.html',
  styleUrls: ['./campaign-editpage.component.css'],
})
export class CampaignEditpageComponent {
   constructor(private router: Router) {}
   campaign(){
    this.router.navigate(['/appsettingpage']);
  }
   service(){
    this.router.navigate(['/servicepage']);
  }
}
