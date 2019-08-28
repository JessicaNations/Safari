import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarsComponent } from './calendars/calendars.component';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';
import { AdmissionDetailComponent } from './admissions/admission-detail.component';
import { VisitComponent } from './visit/visit.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { AdmissionListComponent } from './admissions/admission-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CalendarDetailComponent },
  { path: 'calendars', component: CalendarsComponent },
  { path: 'admission-list', component: AdmissionListComponent },
  { path: 'visit', component: VisitComponent },
  { path: 'about', component: AboutComponent },
  { path: 'support', component: SupportComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
