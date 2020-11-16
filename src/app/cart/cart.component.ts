import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items;
checkoutForm;
  constructor(private cartService: CartService, private location: Location,  private http: HttpClient, private formBuilder: FormBuilder) {this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
      });
       }

  ngOnInit() {this.items = this.cartService.getItems();
  }

  goBack(): void {
    this.location.back();
  }
onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}