import { NgModule } from "@angular/core";
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { CarouselComponent } from './carousel.component';

@NgModule({
    declarations: [
        CarouselComponent
    ],
    imports: [
        SisainSharedModule
    ],
    exports: [
        CarouselComponent
    ]
})

export class CarouselModule { }