import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { User } from '../User';
import { Event } from '../Event';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  newUser: User = new User(0, "");
  constructor(private eventDB: EventService) { }


  ngOnInit(): void { 
    // this.eventDB.loggedUser = new User (4,"Adam")
  }

  showUsers(): void {
    this.eventDB.showUsers().subscribe(
      (response) => {
        this.users = response;
      }
    )
  }



  getUserByName(name:string) {
  this.eventDB.getUserByName(name).subscribe(
    (response) =>{
      this.eventDB.setCurrentUser (response);
    }
  )
  }

  



  registerUser(): void {
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
