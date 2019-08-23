import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'about', component: AboutComponent },
  ]),
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule {}
