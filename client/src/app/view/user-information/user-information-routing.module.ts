import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { UserInformationComponent } from './user-information.component';

const routes: Routes = [

    {
        path: '',
        component: UserInformationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class UserInformationRoutingModule { }