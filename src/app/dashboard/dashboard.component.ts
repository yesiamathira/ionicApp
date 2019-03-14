import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor( private router: Router,private menu: MenuController) { }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  ngOnInit() {}

}