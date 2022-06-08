import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../Event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  results: Event[] = [];
  newEvent: Event = new Event(0, "", null, "", false);
  constructor(private eventDB: EventService) { }

  ngOnInit(): void {
  }

  showEvents(): void {
    this.eventDB.getAllEvents().subscribe(
      (response) => {
        this.results = response;
      }
    )
  }

  createEvent(): void {
    this.eventDB.createEvent(this.newEvent).subscribe(
      (response) => {console.log(response)}
    );
  }

  deleteEvent(id: number): void {
    this.eventDB.deleteEvent(id).subscribe(
      (response) => {console.log(response)}
    );
  }
}
