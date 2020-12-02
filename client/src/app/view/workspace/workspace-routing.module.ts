import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { WorkspaceComponent } from './workspace.component';

const routes: Routes = [

    {
        path: '',
        data: {
            category: 'workspace'
        },
        component: WorkspaceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class WorkspaceRoutingModule { }