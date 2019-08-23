import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/dashboard']">Home</a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/admissions']">Plan Your Visit</a></li>
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
}
