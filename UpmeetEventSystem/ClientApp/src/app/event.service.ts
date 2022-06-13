import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './Event';
import { User } from './User';
import { Favorite } from './event/Favorite';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  rootURL: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.rootURL = baseUrl;
  }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.rootURL + "event/GetEvents/");
  }

  createEvent(newEvent: Event) {
    return this.http.post(this.rootURL + "event/CreateEvent/", newEvent);
  }

  deleteEvent(id: number) {
    return this.http.delete(this.rootURL + "event/DeleteEvent/" + id);
  }

  favoriteEvent(id: number) {
    return this.http.put(this.rootURL + "event/FavoriteEvent/" + id, {});
  }

  

  //===========================================================================

  showUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.rootURL + "user/ShowUsers/");
  }

  addUser(u: User) {
    return this.http.put(this.rootURL + "user/AddUser/", u);
  }

  removeUser(id: number) {
    return this.http.delete(this.rootURL + "user/RemoveUser/" + id);
  }

  //===========================================================================

  showFavorites(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(this.rootURL + "favorite/ShowFavorites/");
  }

  addFavorite(f: Favorite) {
    return this.http.put(this.rootURL + "favorite/AddFavorite/", f);
  }

  removeFavorite(id: number) {
    return this.http.delete(this.rootURL + "favorite/RemoveFavorite/" + id)
  }

  //============================================================================

  //  getEventsByName(name: string) {
  //    return this.http.get<Event[]>(this.rootURL + "event/SearchByName/" + name);
  //  }

  //  getEventsById(id: number) {
  //    return this.http.get<Event>(this.rootURL + "event/SearchById/" + id);
  //  }

  // updateEvent(id: number) {
  //   return this.http.put(this.rootURL + "event/UpdateEvent/" + id, {});
  // }
}
