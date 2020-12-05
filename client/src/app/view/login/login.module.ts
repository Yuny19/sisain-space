import { NgModule } from "@angular/core";
import { FormLoginModule } from 'src/app/component/form-login/form-login.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        LoginRoutingModule,
        FormLoginModule
    ]
})

export class LoginModule { }