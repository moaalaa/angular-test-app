import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimeShippingPrices } from '../anime_list';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {

  shippingPrices: Observable<AnimeShippingPrices[]> = this.cartService.getShippingPrices();
  constructor(private cartService: CartService) { }

}
