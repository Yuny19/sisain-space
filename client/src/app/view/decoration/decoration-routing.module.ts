import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { DecorationComponent } from './decoration.component';

const routes: Routes = [

    {
        path: '',
        data: {
            category: 'decoration'
        },
        component: DecorationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class DecorationRoutingModule { }