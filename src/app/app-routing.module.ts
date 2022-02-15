import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  { path: '', component: AnimeListComponent },
  { path: 'anime-list/:animeId', component: AnimeDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
