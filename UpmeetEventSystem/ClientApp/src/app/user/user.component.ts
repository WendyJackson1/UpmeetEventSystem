import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { User } from '../User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  results: User[] = [];
  newUser: User = new User(0, "");
  constructor(private eventDB: EventService) { }

  ngOnInit(): void {
  }

  showUsers(): void {
    this.eventDB.showUsers().subscribe(
      (response) => {
        this.results = response;
      }
    )
  }

  createUser(): void {
    this.eventDB.addUser(this.newUser).subscribe(
      (response) => {console.log(response)}
    );
  }

  deleteUser(id: number): void {
    this.eventDB.removeUser(id).subscribe(
      (response) => {console.log(response)}
    );
  }


}
