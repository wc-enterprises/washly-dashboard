import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AnyARecord } from 'dns';
import { ICampaign } from '../campaign/utils/interface';

@Component({
  selector: 'washly-app-delete-confirmation-modal',
  templateUrl: './delete-box.component.html',
  styleUrls: ['./delete-box.component.css'],
})
export class DeleteBoxComponent {
  @Output() closePopup = new EventEmitter<void>();
  @Output() delete = new EventEmitter<any>();
 @Output() removeBlurEvent = new EventEmitter();


  

  closeModal() { 
   
    this.closePopup.emit();
  }

    onDelete() {
      console.log("Delete button clicked.")
    this.delete.emit();
    
     }
 removeBlurClick() {
    this.removeBlurEvent.emit();
    
  }
 
 
}
