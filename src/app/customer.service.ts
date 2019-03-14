import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  customer:any=[];
  customers:any = [];
  constructor() { 
    var defaultList =[
      {
        id:1,
        name:'Swathi',
        email:'swathi@gmail.com',
        phone:'9999999999',
        address:'India'
      },
      {
        id:2,
        name:'Divya',
        email:'divya@gmail.com',
        phone:'992343499',
        address:'India'
      }
    ];
    if(localStorage.getItem('customers')==null || JSON.parse(localStorage.getItem('customers')).length==0)
    {
      this.customer = defaultList;
      this.setLocaStorageCustomer(this.customer);
    }else{
      this.getLocaStorageCustomer();
    }
  }
  getLocaStorageCustomer(){
    this.customers = JSON.parse(localStorage.getItem('customers'));
  }
  setLocaStorageCustomer(list){
    localStorage.setItem('customers',JSON.stringify(list))
  }
  // customers: any = [
  //   {
  //     id:1,
  //     name:'Swathi',
  //     email:'swathi@gmail.com',
  //     phone:'9999999999',
  //     address:'India'
  //   },
  //   {
  //     id:2,
  //     name:'Divya',
  //     email:'divya@gmail.com',
  //     phone:'992343499',
  //     address:'India'
  //   }
  // ];
  
  getCustomer(){
    return this.customers;
  }
  addCustomer(customer){
    customer.id = Math.round(Math.random()*10000);
    this.customers.push(customer);    
    this.setLocaStorageCustomer(this.customers);
  }
  deleteCustomer(id){
    var list = [];
    for(var i=0;i<this.customers.length;i++){
      if(id!== this.customers[i].id){
        list.push(this.customers[i]);
      }
    }
    this.setLocaStorageCustomer(this.customers);
    return this.customers = list;
  }
  updateCustomer(customer){
    for(var i=0; i<this.customers.length;i++){
      if(this.customers[i].id==customer.id){
      this.customers[i]=customer;
      }
    }
    this.setLocaStorageCustomer(this.customers);
  }
  addUpdateCustomer(customer){
    var update = false;
    for(var i=0; i<this.customers.length;i++){
      if(this.customers[i].id==customer.id){
        update = true;
        this.customers[i]=customer;
        // return this.customers[i];
        break;
      }
    }
    this.setLocaStorageCustomer(this.customers);
  }
  getCustomerById(id){
    for(var i=0;i<this.customers.length;i++){
      if(this.customers[i].id==id ){
        return this.customers[i];
      }
    }
    this.setLocaStorageCustomer(this.customers);
  }
  
}