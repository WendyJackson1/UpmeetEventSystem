import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { EventComponent } from './event/event.component';
import { UserComponent } from './user/user.component';
import { FavoriteComponent } from './favorite/favorite.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar'

import { MatExpansionModule} from '@angular/material/expansion';
import { EventService } from './event.service';


@NgModule({
  declarations: [

    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EventComponent,
    UserComponent,
    FavoriteComponent,
    // BrowserAnimationsModule,
    // MatBadgeModule,
    // MatIconModule,
    // MatButtonModule,
    // MatMenuModule,
    // MatProgressBarModule,
    // MatExpansionModule

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressBarModule,
    MatExpansionModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'event', component: EventComponent},
      { path: 'user', component: UserComponent},
      { path: 'favorite', component: FavoriteComponent},
      { path: 'showEvents', component: EventComponent},
      { path: 'registerUser', component: EventComponent}
    ])
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
