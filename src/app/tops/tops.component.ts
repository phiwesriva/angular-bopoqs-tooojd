import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-tops',
  templateUrl: './tops.component.html',
  styleUrls: ['./tops.component.css']
})
export class TopsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
products = products;
}