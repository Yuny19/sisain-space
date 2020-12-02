import { NgModule } from "@angular/core";
import { CardModule } from 'src/app/component/card/card.module';
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';

@NgModule({
    declarations: [
        WorkspaceComponent
    ],
    imports: [
        SisainSharedModule,
        WorkspaceRoutingModule,
        CardModule
    ]
})

export class WorkspaceModule { }