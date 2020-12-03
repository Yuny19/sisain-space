import { NgModule } from '@angular/core';
import { SisainSharedModule } from '../../shared/sisain-shared.module';
import { FormLoginComponent } from './form-login.component';

@NgModule({
    declarations: [
        FormLoginComponent
    ],
    imports: [
        SisainSharedModule
    ]
})
export class FormLoginModule { }