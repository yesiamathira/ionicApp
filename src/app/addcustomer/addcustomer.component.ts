import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss'],
})
export class AddcustomerComponent implements OnInit {

  constructor(private router: Router,private customerService : CustomerService) { }
  customer:any={
    name:"",
    email:"",
    phone:"",
    address:""
  };
  ngOnInit() {}
  onAdd(customer){
     this.customerService.addCustomer(customer);
     this.router.navigate(['/listcustomer']); 
  }
  
}