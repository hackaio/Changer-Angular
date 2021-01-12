import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-provider',
  templateUrl: './change-provider.component.html',
  styleUrls: ['./change-provider.component.css']
})
export class ChangeProviderComponent implements OnInit {
  username = '';
  num = 1;

  constructor() { }

  ngOnInit(): void {
  }
  logout(): void{}
}
