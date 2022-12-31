import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'washly-app-delete-confirmation-modal',
  templateUrl: './delete-box.component.html',
  styleUrls: ['./delete-box.component.css'],
})
export class DeleteBoxComponent {
  @Input() isActive = false;
  @Output() closeEvent = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();



  closeModal() {
    this.isActive = false;
    this.closeEvent.emit();
  }

  deleteItem() {
    this.isActive = false;
    this.delete.emit();
  }
}
