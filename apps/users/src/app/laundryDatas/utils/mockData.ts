import { getCustomers } from "../getdata.service"
import { ICustomer } from "./interface"


  

const customerDetails=[ {
    id : "1",
     name : "madhan",
     phoneNumber : "9789212608",
     status : "customer",
     addresses : [{
         careOf : "string",
   addressLine1:  "string",
   addressLine2 :  "string",
   addressLine3 :  "string",
   city:  "string",
   state:  "string",
   country:  "string",
   pincode: 789825,
     }],
     storeId : "hui",
}]


export function getCustomerDetails(phoneNumber:string):ICustomer{
    const objOfCustomerDetails =customerDetails.find((customer)=> customer.phoneNumber===phoneNumber)
    if(!objOfCustomerDetails){
        throw 'contact not found'
    }
    return objOfCustomerDetails;
}
