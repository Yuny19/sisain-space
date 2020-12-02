import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { DiningRoomComponent } from './dining-room.component';

const routes: Routes = [

    {
        path: '',
        data: {
            category: 'dining room'
        },
        component: DiningRoomComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class DiningRoomRoutingModule { }