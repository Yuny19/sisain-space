import { NgModule } from "@angular/core";
import { CardModule } from 'src/app/component/card/card.module';
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { LivingRoomRoutingModule } from './living-room-routing.module';
import { LivingRoomComponent } from './living-room.component';

@NgModule({
    declarations: [
        LivingRoomComponent
    ],
    imports: [
        SisainSharedModule,
        LivingRoomRoutingModule,
        CardModule
    ]
})

export class LivingRoomModule { }