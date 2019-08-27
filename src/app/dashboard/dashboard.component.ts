import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Event } from '../event';
import { EventService } from '../event.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public pageTitle = 'Safari';
  events: Event[] = [];
  jwtToken = window.localStorage.getItem('jwtToken');
  images$ = this.httpClient
    .get(`https://api.giphy.com/v1/gifs/search?q=dogs&imit=10&api_key=dc6zaTOxFJmzC`)
    .pipe(map((resp: any) => resp.data));

  constructor(private httpClient: HttpClient, private eventService: EventService) {}

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events.slice(1, 5));
  }

  setJwtToken(token: string): void {
    this.jwtToken = token;
    window.localStorage.setItem('jwtToken', token);
  }
}
