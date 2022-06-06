import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  rootURL: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.rootURL = baseUrl;
   }

   getAllEvents(): Observable<Event[]> {
     return this.http.get<Event[]>(this.rootURL + "event/GetEvents/")
   }

   favoriteEvent(id: number) {
     return this.http.put(this.rootURL + "event/FavoriteEvent/" + id, {})
   }
   
   createEvent(newEvent: Event) {
     return this.http.post(this.rootURL + "event/CreateEvent/", newEvent)
   }
 
   deleteEvent(id: number) {
     return this.http.delete(this.rootURL + "event/DeleteEvent/" + id)
   }
}