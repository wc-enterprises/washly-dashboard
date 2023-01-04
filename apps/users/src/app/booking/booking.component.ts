import { Component } from '@angular/core';

@Component({
  selector: 'washly-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})

export class BookingComponent {

  bookinglist = [{id:"b_78yu-67", place:"Guduvanchery", date:"25/07/2022"},
  {id:"b_78yu-68", place:"Urappakkam", date:"25/07/2022"},
  {id:"b_78yu-69", place:"Thambaram", date:"25/07/2022"},
  {id:"b_78yu-70", place:"Chrompet", date:"25/07/2022"},
  {id:"b_78yu-71", place:"Sp kovil", date:"25/07/2022"},
  {id:"b_78yu-72", place:"Potheri", date:"25/07/2022"},
  {id:"b_78yu-73", place:"Pallavaram", date:"25/07/2022"}];

  columns = ['name', 'no of items', 'weight', 'amount'];
  data = [['washing', '2', '3 kg', '50'],['ironing', '3' , '3' , '30']];
  
  columnsSchema= [
    {
        key: "name",
        type: "text",
        label: "Full Name"
    },
    {
        key: "occupation",
        type: "text",
        label: "Occupation"
    },
    {
        key: "age",
        type: "number",
        label: "Age"
    },
    {
        key: "isEdit",
        type: "isEdit",
        label: "jj"
    }
  ]
  displayedColumns: string[] = ['name', 'occupation', 'age'];
  dataSource = [
    {"name": "John Smith", "occupation": "Advisor", "dateOfBirth": "1984-05-05", "age": 36},
    {"name": "Muhi Masri", "occupation": "Developer", "dateOfBirth": "1992-02-02", "age": 28},
    {"name": "Peter Adams", "occupation": "HR", "dateOfBirth": "2000-01-01", "age": 20},
    {"name": "Lora Bay", "occupation": "Marketing", "dateOfBirth": "1977-03-03", "age": 43},
  ]

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
  }
}
  