import { NgModule } from "@angular/core";
import { CardModule } from 'src/app/component/card/card.module';
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { DecorationRoutingModule } from './decoration-routing.module';
import { DecorationComponent } from './decoration.component';

@NgModule({
    declarations: [
        DecorationComponent
    ],
    imports: [
        SisainSharedModule,
        DecorationRoutingModule,
        CardModule
    ]
})

export class DecorationModule{}