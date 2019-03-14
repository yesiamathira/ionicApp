import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CustomerService} from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit.customer',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditCustomerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private customerService:CustomerService, private router : Router) { }
  id: number;
  private sub: any;
  customer:any;
  ngOnInit() {
  	 this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       console.log("id is "+this.id);
       this.customer = this.customerService.getCustomerById(this.id);
    });
    
  }
  updateCustomer(id){
    for(var i = 0; i < this.customer.length; i++){
      if(id==this.customer[i].id){
        this.customer[i] = this.customer;
        this.customer.push(this.customer);
      }
    }
    return null;
  }
}