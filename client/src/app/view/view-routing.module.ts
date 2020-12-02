import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: () => import('./home-page/home-page.module').then(mod => mod.HomePageModule)
            },
            {
                path: 'living-room',
                loadChildren: () => import('./living-room/living-room.module').then(mod => mod.LivingRoomModule)
            },
            {
                path: 'bedroom',
                loadChildren: () => import('./bedroom/bedroom.module').then(mod => mod.BedroomModule)
            },
            {
                path: 'dining-room',
                loadChildren: () => import('./dining-room/dining-room.module').then(mod => mod.DiningRoomModule)
            },
            {
                path: 'workspace',
                loadChildren: () => import('./workspace/workspace.module').then(mod => mod.WorkspaceModule)
            },
            {
                path: 'decoration',
                loadChildren: () => import('./decoration/decoration.module').then(mod => mod.DecorationModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ViewRoutingModule { }