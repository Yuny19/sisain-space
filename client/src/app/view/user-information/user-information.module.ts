import { NgModule } from "@angular/core";
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { UserInformationComponent } from './user-information.component';

@NgModule({
    declarations: [
        UserInformationComponent
    ],
    imports: [
        SisainSharedModule
    ]
})

export class UserInformationModule { }