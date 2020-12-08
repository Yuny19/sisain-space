import { NgModule } from '@angular/core';
import { SisainSharedModule } from '../../shared/sisain-shared.module';
import { FormLoginComponent } from './form-login.component';
import { TabsModule } from 'ngx-bootstrap';

@NgModule({
    declarations: [
        FormLoginComponent
    ],
    exports: [
        FormLoginComponent
    ],
    imports: [
        SisainSharedModule,
        TabsModule.forRoot()
    ]
})
export class FormLoginModule { }