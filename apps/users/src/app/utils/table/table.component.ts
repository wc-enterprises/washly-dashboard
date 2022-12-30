
import { Component } from '@angular/core';

@Component({
  selector: 'washly-table',
  template: `
    <button *ngIf="!editing" (click)="startEditing()">Edit</button>

    <table>
      <thead>
        <tr>
          <th *ngFor="let column of columns">{{column}}</th>
        </tr>
      </thead>
      <tbody>
      <tr *ngFor="let row of data; let rowIndex = index">
      <td *ngFor="let data of row; let colIndex = index">
        <input *ngIf="editing" type="text" [value]="data" (input)="onEdit(rowIndex, colIndex, $event)" >
        <div *ngIf="!editing">{{data}}</div>
      </td>
    </tr>
      </tbody>
    </table>
  `,
  styles: [
    `
      table {
        border-collapse: collapse;
      }
      td, th {
        border: 1px solid #ddd;
        padding: 8px;
      }
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }
    `,
  ],
})
export class EditableTableComponent  {
  data = [
    ['John', 'Doe', 'john@example.com'],
    ['Jane', 'Doe', 'jane@example.com'],
  ];
  columns = ['First Name', 'Last Name', 'Email'];
  editing = false;

  startEditing() {
    this.editing = true;
  }

  stopEditing() {
    this.editing = false;
  }

  onEdit(rowIndex: number, colIndex: number, event: Event) {
    console.log(rowIndex, colIndex, (event.target as HTMLInputElement).value)
    this.data[rowIndex][colIndex] = (event.target as HTMLInputElement).value;
    console.log("data updated successfully")
  }}