import { NgModule } from "@angular/core";
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { DetailContentRoutingModule } from './detail-content-routing.module';
import { DetailContentComponent } from './detail-content.component';

@NgModule({
    declarations: [
        DetailContentComponent 
    ],
    imports: [
        SisainSharedModule,
        DetailContentRoutingModule
    ]
})

export class DetailContentModule {}