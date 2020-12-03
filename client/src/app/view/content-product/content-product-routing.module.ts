import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { ContentProductComponent } from './content-product.component';

const routes: Routes = [

    {
        path: '',
        component: ContentProductComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ContentProductRoutingModule { }