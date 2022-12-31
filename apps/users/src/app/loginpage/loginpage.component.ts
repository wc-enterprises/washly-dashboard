import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'washly-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {


 emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  imageStyle = {
    width: '100vw',
    height: '100vh'
  };
  images = [
    '/assets/Laundry 1.png',
    '/assets/login-image2.jpg',
    '/assets/login-image3.png',
    '/assets/login-image4.jpg'
  ];
   captions = [
    'With our hygienic washing procedures,we provide better solutions to you during the hard times like bad weather, busy schedule and so on.',
    'Clean laundry,peace of mind',
    'Make getting up for work easy and stress-free with our great dry-cleaning and ironing services.',
    'Delivering excellent performance, so that you don’t worry about your laundry.'
    
  ];
 
  currentImage = this.images[0];
  caption = this.captions[0];
 currentIndex = this.images.indexOf(this.currentImage);
  

   ngOnInit() {
    setInterval(() => {
      this.nextImage();
    }, 5000);
  }
  
 

  nextImage() {
    
    this.currentImage = this.images[(this.currentIndex + 1) % this.images.length];
   
      this.caption = this.captions[(this.currentIndex + 1) % this.captions.length];
       this.currentIndex = this.images.indexOf(this.currentImage);
     
  }
   gotoImage(index: number) {
       this.currentIndex = index;

    this.currentImage = this.images[index];
    this.caption=this.captions[index]
    
  }
  

}




