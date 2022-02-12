import { animeList, Anime } from './../anime_list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent {

  animeListNames: Anime[] = animeList;

  share(anime_title:string) {
    alert(`${anime_title} has been shared!`);
  }

  onNotify() {
    alert(`You will be notified!`);
  }
}
