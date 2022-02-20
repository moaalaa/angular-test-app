import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Anime } from '../anime_list';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    // Create Cart
    this.cartService.clearCart();

    this.items = [];
    

    console.log('Your order has been submitted', this.checkoutForm.value);

    // Clear Checkout Form
    this.checkoutForm.reset();
  }
}
