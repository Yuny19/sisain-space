import { NgModule } from "@angular/core";
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { FormExpeditionComponent } from './form/form-expedition.component';
import { ManageExpeditionRoutingModule } from './manage-expedition-routing.module';
import { TableExpeditionComponent } from './table/table-expedition.component';

@NgModule({
    declarations:[
        TableExpeditionComponent,
        FormExpeditionComponent
    ],
    exports:[
        TableExpeditionComponent,
        FormExpeditionComponent
    ],
    imports:[
        SisainSharedModule,
        ManageExpeditionRoutingModule
    ] 
})

export class ManageExpeditionModule{}