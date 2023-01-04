import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'washly-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css'],
})
export class ServicePageComponent {

  @Output() deletePopUp = new EventEmitter<boolean>();

 items = [
    { name:'Regular wash',   icon1:'/assets/edit.png', icon2: '/assets/delete.png',status:'active'},
    { name:'Wash and press',   icon1:'/assets/edit.png', icon2: '/assets/delete.png',status:'inactive' },
    { name:'Dry cleaning',   icon1:'/assets/edit.png', icon2: '/assets/delete.png',status:'active' },
    { name:'Just ironing',   icon1:'/assets/edit.png', icon2: '/assets/delete.png',status:'active' },
    { name:'Regular wash + Ironing',   icon1:'/assets/edit.png', icon2: '/assets/delete.png',status:'inactive'},
    
  
  ];
  objects = [{title:'Name', name: 'Regular wash',editing:false },
    {title:'Price per unit', name: '9',editing:false },
    {title:'Unit of calculation', name: 'Per piece',editing:false}]
 
  displayedData: any;
  

  constructor(private router: Router) {}
   showDiv = true;
   isModalActive = false;

    displayData(data: any) {
    this.displayedData = data;
  }

  openDeleteConfirmationModal() {
    this.isModalActive = true;
    this.deletePopUp.emit(true);
    console.log("change modal active status to:" , this.isModalActive)
  }

  closeDeleteConfirmationModal() {
    this.isModalActive = false;
  }

  deleteItem(){
    return
  }

  // editing() {
  //   this.router.navigate(['/serviceeditpage']);
  // }
  campaign(){
    this.router.navigate(['/appsettingpage']);
  }
   @HostListener('document:click')
  toggleBlur() {
    document.body.classList.toggle('blur');
  }
   // eslint-disable-next-line @typescript-eslint/member-ordering
   text = 'Text to be edited';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  editing = false;

  

  editText() {
    this.editing = true;
  }

  save() {
    this.editing = false;
  }

}
