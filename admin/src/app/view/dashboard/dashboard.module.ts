import { NgModule } from "@angular/core";
import { CardModule } from 'src/app/component/card/card.module';
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
    declarations:[
        DashboardComponent
    ],
    exports:[
        DashboardComponent
    ],
    imports:[ 
        SisainSharedModule,
        DashboardRoutingModule,
        CardModule
    ]
})

export class DashboardModule{}