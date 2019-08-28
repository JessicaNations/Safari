import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';


@NgModule({
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule
  ]
})
export class MaterialModule { }
