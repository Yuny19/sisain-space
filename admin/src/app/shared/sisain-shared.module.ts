import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgxDatatableModule,

  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgxDatatableModule,

  ]
})
export class SisainSharedModule {}
