import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { TableExpeditionComponent } from './table/table-expedition.component';
import { FormExpeditionComponent } from './form/form-expedition.component';

const routes: Routes = [

    {
        path: '',
        component: TableExpeditionComponent
    },
    {
        path: 'add',
        data: {
            editable: true
        },
        component: FormExpeditionComponent
    },
    {
        path: ':id',
        data: {
            editable: true
        },
        component: FormExpeditionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ManageExpeditionRoutingModule { }