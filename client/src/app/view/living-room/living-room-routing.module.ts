import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { LivingRoomComponent } from './living-room.component';

const routes: Routes = [

    {
        path: '',
        data: {
            category: 'living room'
        },
        component: LivingRoomComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class LivingRoomRoutingModule { }