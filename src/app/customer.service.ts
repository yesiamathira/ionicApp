import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
customers:any=[
  {id:1, name:'Rahul', email:'rahul@gmail.com',address:'india', phone:'564378'},
  {id:2, name:'Rakesh', email:'rakesh@gmail.com',address:'india', phone:'3876901'}
]
customer:any= {id:'', name:'', email:'', address:'', phone:''}
  constructor() { }
  getCustomers(){
    if(localStorage.getItem('customers') != null){
      this.customers = JSON.parse(localStorage.getItem('customers'));
    }
  return this.customers;
  }
  
  addCustomers(customer){
    customer.id  =Math.round(Math.random()*1000000);
    var updated = false;
    for(var i = 0; i < this.customers.length; i++){
      if(customer.id == this.customers[i].id){
        updated = true;
        this.customers[i] = customer;
        localStorage.setItem('customers', JSON.stringify(this.customers));
        break;
      }
    }
  if(!updated){
    this.customers.push(customer);
    localStorage.setItem('customers', JSON.stringify(this.customers));
  }
  }
  updateCustomer(id){
    for(var i = 0; i < this.customers.length; i++){
      if(id==this.customers[i].id){
        this.customers[i] = this.customer;
      }
    }
  }
  deleteAllCustomers(customer){
    this.customers =[];
    //localStorage.clear(customer);
    localStorage.setItem('customers', JSON.stringify(this.customers));
    return customer;
}
deleteCustomer(c){
  for(var i = 0; i< this.customers.length; i++){
    if(c.id == this.customers[i].id){
      this.customers.splice(i, 1);
    }
  }
  localStorage.setItem('customers', JSON.stringify(this.customers));
}
getCustomerById(id:number){
  for(var i = 0; i<this.customers.length; i++){
    if(this.customers[i].id==id){
      return this.customers[i];
    }
   return null;
    }
  };
}
