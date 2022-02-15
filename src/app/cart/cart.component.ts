import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime_list';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{

  items: Anime[] = this.cartService.getItems();

  constructor(private cartService: CartService) { }
}
