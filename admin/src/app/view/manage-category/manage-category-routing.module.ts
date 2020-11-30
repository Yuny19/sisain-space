import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { TableCategoryComponent } from './table/table-category.component';
import { FormCategoryComponent } from './form/form-category.component';

const routes: Routes = [

    {
        path: '',
        component: TableCategoryComponent
    },
    {
        path: 'add',
        data: {
            editable: true
        },
        component: FormCategoryComponent
    },
    {
        path: ':id',
        data: {
            editable: true
        },
        component: FormCategoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ManageCategoryRoutingModule { }