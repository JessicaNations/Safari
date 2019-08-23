import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdmissionListComponent } from './admission-list.component';
import { AdmissionDetailComponent } from './admission-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { AdmissionDetailGuard } from './admission-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'admissions', component: AdmissionListComponent },
      {
        path: 'admissions/:id',
        canActivate: [AdmissionDetailGuard],
        component: AdmissionDetailComponent
      },
    ]),
    SharedModule
  ],
  declarations: [
    AdmissionListComponent,
    AdmissionDetailComponent,
    ConvertToSpacesPipe
  ]
})
export class AdmissionModule { }
