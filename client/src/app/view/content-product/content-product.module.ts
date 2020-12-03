import { NgModule } from "@angular/core";
import { CardModule } from 'src/app/component/card/card.module';
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { ContentProductRoutingModule } from './content-product-routing.module';
import { ContentProductComponent } from './content-product.component';

@NgModule({
    declarations: [
        ContentProductComponent
    ],
    imports: [
        SisainSharedModule,
        ContentProductRoutingModule,
        CardModule
    ]
})

export class ContentProductModule {}