import { NgModule } from "@angular/core";
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { CardComponent } from './card.component';

@NgModule({
    declarations: [
        CardComponent
    ],
    exports: [
        CardComponent
    ],
    imports: [
        SisainSharedModule
    ]
})

export class CardModule { }