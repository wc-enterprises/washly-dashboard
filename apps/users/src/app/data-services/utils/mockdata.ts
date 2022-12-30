import { ICustomer } from "./interface";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const customerDetails = [{
    id : "1",
    name : "string",
    phoneNumber : "7898765433",
    status : "string", // ALLOWED || BLOCKED
    storeId: "string",
}, {
    id : "2",
    name : "string",
    phoneNumber : "7865423458",
    status : "string", // ALLOWED || BLOCKED
    storeId: "string",
}, {
    id : "3",
    name : "string",
    phoneNumber : "9876543789",
    status : "string", // ALLOWED || BLOCKED
    storeId: "string",
}]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getCustomersDetails(phoneNumber:string): ICustomer{
  const objOfCustomerDetails = customerDetails.find((customer) => customer.phoneNumber === phoneNumber)
  if(!objOfCustomerDetails) {
    throw 'Contact not found.'
  }
    return objOfCustomerDetails;
}