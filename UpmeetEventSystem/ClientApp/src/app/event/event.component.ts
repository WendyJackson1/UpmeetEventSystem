import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../Event';
import { User } from '../User';



@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  loggedInUser : User = new User (0,"");

  events: Event[] = [];
  newEvent: Event = new Event(0, "", null, "", false);
  constructor(private eventDB: EventService) { }

  ngOnInit(): void {this.showEvents();
    this.loggedInUser = this.eventDB.loggedUser
  }

  showEvents(): void {
    this.eventDB.getAllEvents().subscribe(
      (response) => {
        this.events = response;
      }
    )
  }



  // removeTime(date = new Date()) {
  //   return new Date(date.toDateString());
  // }

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

  addFavorite(id: number): void {console.log(this.eventDB.loggedUser)
    this.eventDB.addFavorite(id,this.eventDB.getCurrentUser().userId).subscribe(
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
