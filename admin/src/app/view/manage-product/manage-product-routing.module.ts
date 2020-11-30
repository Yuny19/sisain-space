import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { TableProductComponent } from './table/table-product.component';
import { FormProductComponent } from './form/form-product.component';

const routes: Routes = [

    {
        path: '',
        component: TableProductComponent
    },
    {
        path: 'add',
        data: {
            editable: true
        },
        component: FormProductComponent
    },
    {
        path: ':id',
        data: {
            editable: true
        },
        component: FormProductComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ManageProductRoutingModule { }