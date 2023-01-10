import axios, { AxiosRequestConfig } from 'axios';
import { ICustomer } from '../laundryDatas/utils/interface';
import{IStore} from '../laundryDatas/utils/interface';
import{IBooking} from '../laundryDatas/utils/interface';
import{IUser} from '../laundryDatas/utils/interface';
import { getCustomerDetails } from './utils/mockData';


export function getCustomers(this: any, data: string,env:string): Promise<any> {
 
if(env=="prod"){
 const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'http://localhost:3000/customer/get-ICustomer',
    headers: {
      'Content-Type': 'application/json',
    },
    params: data,
       
  };

  return axios(config)
    .then((res) => res)
    .catch((err) => err); 
} 
else if(env=='test'){
  const responseData =getCustomerDetails('9789212608')
  if(!responseData){
    throw 'response not found'
  }  
  try {
     console.log(this.responseData);
  } catch (phoneNumber) {
    console.log(phoneNumber)
  }

}
}

export function getStores(data: string): Promise<IStore[]> {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'http://localhost:3000/customer/get-IStore',
    headers: {
      'Content-Type': 'application/json',
    },
    params: data,
  };

  return axios(config)
    .then((res) => res)
    .catch((err) => err); 
}
export function getBookings(data: string):Promise<IBooking[]> {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'http://localhost:3000/customer/get-IStore',
    headers: {
      'Content-Type': 'application/json',
    },
    params: data,
  };

  return axios(config)
    .then((res) => res)
    .catch((err) => err); 
}
export function getUsers(data: string): IUser {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'http://localhost:3000/customer/get-IStore',
    headers: {
      'Content-Type': 'application/json',
    },
    params: data,
  };

  return axios(config)
    .then((res) => res)
    .catch((err) => err); 
}

