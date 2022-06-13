import { Component } from '@angular/core'
import { Injectable, Inject } from '@angular/core'
import { EventService } from '../event.service'
import { EventComponent } from '../event/event.component'
import { UserComponent } from '../user/user.component';
import { FavoriteComponent } from '../favorite/favorite.component';
import { Event } from '../Event'
import { User } from '../User'
import { Favorite } from '../event/Favorite';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [EventService, EventComponent, UserComponent, FavoriteComponent],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private eventDB: EventService) {

  }

  events: Event[] = [];
  newEvent: Event = new Event(0, "", null, "", false);
  showEvents(): void {
    this.eventDB.getAllEvents().subscribe(
      (response) => {
        this.events = response;
      }
    )
  }

  favoriteEvent(id: number): void {
    this.eventDB.favoriteEvent(id).subscribe(
      (response) => {console.log(response)}
    )
  }
}
