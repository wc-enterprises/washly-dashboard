import { Component, Input } from '@angular/core';

@Component({
  selector: 'washly-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
@Input() heading!: string;
}
