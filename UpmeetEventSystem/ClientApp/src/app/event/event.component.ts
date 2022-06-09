import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../Event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: Event[] = [];
  newEvent: Event = new Event(0, "", null, "", false);
  constructor(private eventDB: EventService) {  }

  ngOnInit(): void {
  }

  showEvents(): void {
    this.eventDB.getAllEvents().subscribe(
      (response) => {
        this.events = response;
      }
    )
  }

  // createEvent(): void {
  //   this.eventDB.createEvent(this.newEvent).subscribe(
  //     (response) => {console.log(response)}
  //   );
  // }

  createEvent() {
    let clone: Event = new Event(0, "", null, "", false)
    Object.assign(clone, this.newEvent);
    
    console.log(clone);

    this.events.push(clone);
    this.eventDB.createEvent(this.newEvent).subscribe(
      (response) => {console.log(response)}
    );
  }

  deleteEvent(id: number): void {
    this.eventDB.deleteEvent(id).subscribe(
      (response) => {console.log(response)}
    );
  }

  favoriteEvent(id: number): void {
    this.eventDB.favoriteEvent(id).subscribe(
      (response) => {console.log(response)}
    )
  }

  // completeTask(id: number) {

  //   //This is so the task is set to complete on our front-end
  //   for (let i: number = 0; i < this.todos.length; i++) {
  //     let t: ToDo = this.todos[i];
  //     if (t.id === id) {
  //       t.isCompleted = true;
  //       break;
  //     }
  //   }
}
