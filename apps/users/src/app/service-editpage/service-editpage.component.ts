import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'washly-service-editpage',
  templateUrl: './service-editpage.component.html',
  styleUrls: ['./service-editpage.component.css'],
})
export class ServiceEditpageComponent {
   constructor(private router: Router) {}
   campaign(){
    this.router.navigate(['/appsettingpage']);
  }
   service(){
    this.router.navigate(['/servicepage']);
  }
}
