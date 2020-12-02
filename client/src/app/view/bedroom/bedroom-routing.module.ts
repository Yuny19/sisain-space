import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { BedroomComponent } from './bedroom.component';

const routes: Routes = [

    {
        path: '',
        data: {
            category: 'bedroom'
        },
        component: BedroomComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class BedroomRoutingModule { }