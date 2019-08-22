import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanYourVisitModule } from './plan-your-visit-form/plan-your-visit.module';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './dashboard/page-not-found.component';
import { HttpClientInMemoryWebApiModule  } from 'angular-in-memory-web-api';

import {SecuredImageComponent} from './secured-image.component';
import {MyHttpInterceptor} from './my-http.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
    ]),
    PlanYourVisitModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    SecuredImageComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
