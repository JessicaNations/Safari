import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VisitComponent } from './visit.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'visitdetails/:visitdetailId', component: VisitComponent },
  ]),
  ],
  declarations: [
    VisitComponent
  ]
})
export class VisitModule {}
