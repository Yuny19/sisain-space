import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { DetailContentComponent } from './detail-content.component';

const routes: Routes = [

    {
        path: '',
        component: DetailContentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class DetailContentRoutingModule { }