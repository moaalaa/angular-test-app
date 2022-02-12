import { Anime, animeList } from './../anime_list';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {

  anime: Anime | undefined;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // First get the anime id from the current route.
    const animeId = Number(this.route.snapshot.paramMap.get('animeId'));

    // Find the anime that correspond with the id provided in route.
    this.anime = animeList.find(a => a.id === animeId);
  }

  share(anime_title:string) {
    alert(`${anime_title} has been shared!`);
  }

  onNotify() {
    alert(`You will be notified!`);
  }

}
