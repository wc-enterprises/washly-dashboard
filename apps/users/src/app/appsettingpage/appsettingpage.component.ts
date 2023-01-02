import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';



@Component({
  selector: 'washly-appsettingpage',
  templateUrl: './appsettingpage.component.html',
  styleUrls: ['./appsettingpage.component.css'],
})
export class AppsettingpageComponent {

  constructor(private router: Router) {}
   // eslint-disable-next-line @typescript-eslint/member-ordering
   

   isModalActive = false;

     @ViewChildren('tab1, tab2, tab3') tabs!: QueryList<ElementRef>;
  @ViewChildren('tabPane1, tabPane2, tabPane3') tabPanes!: QueryList<ElementRef>;

  // ngAfterViewInit() {
  //   this.tabs.forEach((tab: ElementRef) => {
  //     tab.nativeElement.addEventListener('click', () => {
  //       this.tabPanes.forEach((tabPane: ElementRef) => {
  //         tabPane.nativeElement.classList.remove('active');
  //       });
  //       this.tabs.forEach((tab: ElementRef) => {
  //         tab.nativeElement.classList.remove('active');
  //       });
  //       tab.nativeElement.classList.add('active');
  //       tab.nativeElement.nextElementSibling.classList.add('active');
  //     });
  //   });
  // }


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

}
