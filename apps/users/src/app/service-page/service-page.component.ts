import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'washly-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css'],
})
export class ServicePageComponent {
  constructor(private router: Router) {}
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

  serviceediting() {
    this.router.navigate(['/serviceeditpage']);
  }
  campaign(){
    this.router.navigate(['/appsettingpage']);
  }
  
}
