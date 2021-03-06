import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.scss'],
})
export class EditcustomerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private customerService:CustomerService, private router: Router) { }
  id: number;
  private sub: any;
  customer:any;
  ngOnInit() {
  	 this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       console.log("id is "+this.id);
       this.customer = this.customerService.getCustomerById(this.id);

       // In a real app: dispatch action to load the details here.
    });
  }

  addUpdateCustomer(customer){
    this.customerService.addUpdateCustomer(customer);
    this.router.navigate(['/listcustomer']);
  }


}