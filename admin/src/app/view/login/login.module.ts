import { NgModule } from "@angular/core";
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
    declarations:[
        LoginComponent
    ],
    exports:[
        LoginComponent
    ],
    imports:[
        LoginRoutingModule,
        SisainSharedModule
    ]
})

export class LoginModule{}