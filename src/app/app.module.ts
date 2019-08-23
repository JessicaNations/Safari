import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmissionModule } from './admissions/admission.module';
import { AboutModule } from './about/about.module';
import { SupportModule } from './support/support.module';
import { VisitModule } from './visit/visit.module';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientInMemoryWebApiModule  } from 'angular-in-memory-web-api';

import { SecuredImageComponent } from './dashboard/secured-image.component';
import { MyHttpInterceptor } from './dashboard/my-http.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    // HttpClientInMemoryWebApiModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
    ]),
    AdmissionModule,
    AboutModule,
    SupportModule,
    VisitModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    SecuredImageComponent,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
