import axios, { AxiosRequestConfig } from 'axios';
import { ICustomer } from '../data-services/utils/interface';
import {IStore} from '../data-services/utils/interface';
import {IBookings} from '../data-services/utils/interface';
import {getCustomersDetails} from '../data-services/utils/mockdata';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


export function getCustomers(data: string, env : string):Promise<any> {
 if (env == "prod") { 
    const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'http://localhost:3000/contact/get-all-contacts-of-user',
    headers: {
      'Content-Type': 'application/json',
    },
    params: data,
  };

  return axios(config)
    .then((res) => res)
    .catch((err) => err);
} 
else if (env == 'test') {
  const responseData = getCustomersDetails('9876543789')
  try {
    if(!responseData) {
        throw 'Response not found.'
      }
  } catch (error) {
        
  }
  
  
  // if(!responseData) {
  //   throw 'Response not found.'
  // }
  // return responseData
}

}



export function getStores(data: string): Promise<IStore[]>  {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'http://localhost:3000/contact/get-all-contacts-of-user',
    headers: {
      'Content-Type': 'application/json',
    },
    params: data,
  };

  return axios(config)
    .then((res) => res)
    .catch((err) => err);
}
  
  

  export function getBookings (data: string):Promise<IBookings[]>  {
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: 'http://localhost:3000/contact/sign-up',
      data: data,
    };
  
    return axios(config)
      .then((res) => res)
      .catch((err) => err);
  }