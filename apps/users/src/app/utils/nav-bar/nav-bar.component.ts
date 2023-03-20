import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'washly-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {

  // menuOpen = false;

  // toggleMenu() {
  //   this.menuOpen = !this.menuOpen;
  // }
  // isMobile = false;
  // menuOpen = false;

  // @HostListener('window:resize', ['$event'])
  // onResize(event: { target: { innerWidth: number; }; }) {
  //   this.isMobile = event.target.innerWidth < 768; // or whatever screen size you want to use
  //   if (!this.isMobile) {
  //     this.menuOpen = true; // keep menu open on large screens
  //   }
  // }

  // toggleMenu() {
  //   this.menuOpen = !this.menuOpen;
  // }
  isNavOpen = false;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}  
