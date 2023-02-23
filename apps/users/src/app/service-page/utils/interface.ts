export interface IProduct {
    id: string;
    name:string,
    category:string,
    unitPrice:string,
    unitOfCalculation:string,
    quantity:string,
    amount:string,
 }

 export interface ParsedService {
    id:string;
       name:string;
       selected: boolean;
       dataToDisplay:{
          
           title:string;
           value: string;
          
       }[];
 }
 export interface Idata{
    name:string,
    category:string,
    unitPrice:string,
    unitOfCalculation:string,
    quantity:string,
    amount:string,
 }