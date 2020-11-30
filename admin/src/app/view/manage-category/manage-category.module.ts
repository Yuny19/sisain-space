import { NgModule } from "@angular/core";
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { FormCategoryComponent } from './form/form-category.component';
import { ManageCategoryRoutingModule } from './manage-category-routing.module';
import { TableCategoryComponent } from './table/table-category.component';

@NgModule({
    declarations:[
        FormCategoryComponent,
        TableCategoryComponent
    ],
    exports:[
        FormCategoryComponent,
        TableCategoryComponent
    ],
    imports:[
        SisainSharedModule,
        ManageCategoryRoutingModule
    ] 
})

export class ManageCategoryModule{}