import { NgModule } from "@angular/core";
import { CardModule } from 'src/app/component/card/card.module';
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { DiningRoomRoutingModule } from './dining-room-routing.module';
import { DiningRoomComponent } from './dining-room.component';

@NgModule({
    declarations: [
        DiningRoomComponent
    ],
    imports: [
        SisainSharedModule,
        DiningRoomRoutingModule,
        CardModule
    ]
})

export class DiningRoomModule { }