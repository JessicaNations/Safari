import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SupportComponent } from './support.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'support', component: SupportComponent },
  ]),
  ],
  declarations: [
    SupportComponent
  ]
})
export class SupportModule {}
