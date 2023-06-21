import { Component } from '@angular/core';

@Component({
  selector: 'washly-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {

  isNavOpen = false;

  ngOnInit() {
    console.log("ngoninit is a function")
    document.addEventListener('click', this.handleClickOutside.bind(this));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy is a function')
    document.removeEventListener('click', this.handleClickOutside.bind(this));
    console.log(this)
  }

  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const navElement = document.querySelector('.nav');

    if (navElement && !navElement.contains(target)) {
      this.isNavOpen = false;
    }
  else{
    this.isNavOpen=false;
  }
  }
  toggleNav(event: Event) {
    event.stopPropagation();
    this.isNavOpen = !this.isNavOpen;
  }
 
}  
