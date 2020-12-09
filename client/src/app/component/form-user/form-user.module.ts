import { NgModule } from '@angular/core';
import { SisainSharedModule } from '../../shared/sisain-shared.module';
import { FormUserComponent } from './form-user.component';

@NgModule({
    declarations: [
        FormUserComponent
    ],
    exports: [
        FormUserComponent
    ],
    imports: [
        SisainSharedModule
    ]
})
export class FormUserModule { }