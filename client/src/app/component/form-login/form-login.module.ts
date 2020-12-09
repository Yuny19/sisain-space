import { NgModule } from '@angular/core';
import { SisainSharedModule } from '../../shared/sisain-shared.module';
import { FormLoginComponent } from './form-login.component';
import { TabsModule } from 'ngx-bootstrap';
import { FormUserModule } from '../form-user/form-user.module';

@NgModule({
    declarations: [
        FormLoginComponent
    ],
    exports: [
        FormLoginComponent
    ],
    imports: [
        SisainSharedModule,
        TabsModule.forRoot(),
        FormUserModule
    ]
})
export class FormLoginModule { }