import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Favorite } from '../event/Favorite';
import { Event } from '../Event';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  events: Event[] = [];

  results: Favorite[] = [];
  newFavorite: Favorite = new Favorite(0, 0);
  constructor(private eventDB: EventService) { }

  ngOnInit(): void {
  }
  showEvents(): void {
    this.eventDB.getAllEvents().subscribe(
      (response) => {
        this.events = response;
      }
    )
  }
  showFavorites(): void {
    this.eventDB.showFavorites().subscribe(
      (response) => {
        this.results = response;
      }
    )
  }

  // createFavorite(): void {
  //   this.eventDB.addFavorite(this.newFavorite).subscribe(
  //     (response) => {console.log(response)}
  //   );
  // }

  deleteFavorite(id: number): void {
    this.eventDB.removeFavorite(id).subscribe(
      (response) => {console.log(response)}
    );
  }
}
