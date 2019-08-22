import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanYourVisitFormComponent } from './plan-your-visit-form/plan-your-visit-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    PlanYourVisitFormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
