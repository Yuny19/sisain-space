import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { TableTransactionComponent } from './table/table-transaction.component';

const routes: Routes = [

    {
        path: '',
        component: TableTransactionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ManageTransactionRoutingModule { }