import { NgModule } from "@angular/core";
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { UserInformationRoutingModule } from './user-information-routing.module';
import { UserInformationComponent } from './user-information.component';

@NgModule({
    declarations: [
        UserInformationComponent
    ],
    imports: [
        SisainSharedModule,
        UserInformationRoutingModule
    ]
})

export class UserInformationModule { }