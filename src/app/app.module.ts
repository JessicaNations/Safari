import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule  } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
// import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmissionListComponent } from './admissions/admission-list.component';
import { AdmissionDetailComponent } from './admissions/admission-detail.component';
import { VisitComponent } from './visit/visit.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { CalendarsComponent } from './calendars/calendars.component';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';
import { CalendarSearchComponent } from './calendar-search/calendar-search.component';
import { CalendarService } from './calendar.service';

import { SecuredImageComponent } from './dashboard/secured-image.component';
import { MyHttpInterceptor } from './dashboard/my-http.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';

// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // MaterialModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        delay: 300,
        passThruUnknownUrl: true
      }),
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatDatepickerModule
  ],
  exports: [
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatDatepickerModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AdmissionDetailComponent,
    AdmissionListComponent,
    VisitComponent,
    AboutComponent,
    SupportComponent,
    SecuredImageComponent,
    CalendarsComponent,
    CalendarDetailComponent,
    CalendarSearchComponent
  ],
  providers: [CalendarService, {
    provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
