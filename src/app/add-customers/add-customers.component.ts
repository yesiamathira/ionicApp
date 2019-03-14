import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.scss'],
})
export class AddCustomersComponent implements OnInit {
  customer = {id:'', name:'', email:'', address:'', phone:''};
  id:number;
  constructor( private customerService : CustomerService) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomerById(this.id);
  }
  customers=this.customerService.getCustomers();

  addUpdateCustomers(customer){
    console.log("added-->" , customer);
    this.customerService.addCustomers(customer);
    this.customerService.getCustomers();

  }
 
}
