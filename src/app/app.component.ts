import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/dashboard']">Home</a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/plan-your-visit-form']">Plan Your Visit</a></li>
      </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `,
styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Safari';
  jwtToken = window.localStorage.getItem('jwtToken');
  images$ = this.httpClient
    .get(`https://api.giphy.com/v1/gifs/search?q=dogs&imit=10&api_key=dc6zaTOxFJmzC`)
    .pipe(map((resp: any) => resp.data));

  constructor(private httpClient: HttpClient) {
  }

  setJwtToken(token: string): void {
    this.jwtToken = token;
    window.localStorage.setItem('jwtToken', token);
  }
}
