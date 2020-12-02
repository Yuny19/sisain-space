import { NgModule } from "@angular/core";
import { CardModule } from 'src/app/component/card/card.module';
import { CarouselModule } from 'src/app/component/carousel/carousel.module';
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';


@NgModule({
    declarations:[
        HomePageComponent
    ],
    imports:[ 
        SisainSharedModule,
        HomePageRoutingModule,
        CarouselModule,
        CardModule
    ]
})

export class HomePageModule{}