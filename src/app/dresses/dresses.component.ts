import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

@Component({
  selector: 'app-dresses',
  templateUrl: './dresses.component.html',
  styleUrls: ['./dresses.component.css']
})
export class DressesComponent implements OnInit {
 products = products;
  constructor() { }

  ngOnInit() {
  }

}