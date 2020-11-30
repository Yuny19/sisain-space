import { NgModule } from "@angular/core";
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { ManageTransactionRoutingModule } from './manage-transaction-routing.module';
import { TableTransactionComponent } from './table/table-transaction.component';

@NgModule({
    declarations:[
        TableTransactionComponent
    ],
    exports:[
        TableTransactionComponent
    ],
    imports:[
        SisainSharedModule,
        ManageTransactionRoutingModule
    ] 
})

export class ManageTransactionModule{}