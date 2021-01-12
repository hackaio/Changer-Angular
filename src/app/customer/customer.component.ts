import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  num = 1;
  username = '';

  constructor() { }

  ngOnInit(): void {
  }

  logout(): void {
  }
}
