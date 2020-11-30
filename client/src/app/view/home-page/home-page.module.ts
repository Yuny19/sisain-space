import { NgModule } from "@angular/core";
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { HomePageComponent } from './home-page.component';


@NgModule({
    declarations:[
        HomePageComponent
    ],
    imports:[ 
        SisainSharedModule
    ]
})

export class HomePageModule{}