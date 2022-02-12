import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AnimeListComponent },
  { path: 'anime-list/:animeId', component: AnimeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
