import { NgModule } from "@angular/core";
import { DataTableComponent } from './table/data-table.component';
import { ManageUserRoutingModule } from './manage-user-routing.module';
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';

@NgModule({
    declarations:[
        DataTableComponent
    ],
    exports:[
        DataTableComponent
    ],
    imports:[
        SisainSharedModule,
        ManageUserRoutingModule
    ] 
})

export class ManageUserModule{}