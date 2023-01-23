import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'washly-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css'],
   animations: [
    trigger('moveText', [
      state('left', style({ transform: 'translateX(-100%)' })),
      state('right', style({ transform: 'translateX(100%)' })),
      transition('* => *', animate(20000))
    ])
  ]
})
export class RevenueComponent {
   texts = ['Page under construction'];
  
  currentText = '';
  index = 0;
  state = 'left';
  interval: NodeJS.Timer | undefined;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.currentText = this.texts[this.index];
      this.state = this.state === 'left' ? 'right' : 'left';
      this.index = (this.index + 1) % this.texts.length;
    }, 1000);
  }
}
