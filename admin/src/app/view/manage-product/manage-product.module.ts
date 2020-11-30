import { NgModule } from "@angular/core";
import { NgSelectModule } from '@ng-select/ng-select';
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { FormProductComponent } from './form/form-product.component';
import { ManageProductRoutingModule } from './manage-product-routing.module';
import { TableProductComponent } from './table/table-product.component';

@NgModule({
    declarations:[
        TableProductComponent,
        FormProductComponent
    ],
    exports:[
        TableProductComponent,
        FormProductComponent
    ],
    imports:[
        SisainSharedModule,
        NgSelectModule,
        ManageProductRoutingModule
    ] 
})

export class ManageProductModule{}