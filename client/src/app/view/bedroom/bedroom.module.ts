import { NgModule } from "@angular/core";
import { CardModule } from 'src/app/component/card/card.module';
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { BedroomRoutingModule } from './bedroom-routing.module';
import { BedroomComponent } from './bedroom.component';

@NgModule({
    declarations: [
        BedroomComponent
    ],
    imports: [
        SisainSharedModule,
        BedroomRoutingModule,
        CardModule
    ]
})

export class BedroomModule {}