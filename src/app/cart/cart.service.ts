import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anime, AnimeShippingPrices } from '../anime_list';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Anime[] = [];

  constructor(private http: HttpClient) {}

  addToCart(anime: Anime): void {
    this.items.push(anime);
  }
  
  getItems(): Anime[] {
   return this.items;
  }
  
  clearCart(): Anime[] {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<AnimeShippingPrices[]>('/assets/shipping.json');
  }
}


