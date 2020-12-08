import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppStoreModule } from '../store/store.module';
import { EllipsisPipe } from './pipe/ellipsis.pipe';


@NgModule({
  declarations:[
    EllipsisPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    EllipsisPipe
    
  ]
})
export class SisainSharedModule {}
