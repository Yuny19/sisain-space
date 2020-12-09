import { NgModule } from "@angular/core";
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PopoverModule, ModalModule, TabsModule } from 'ngx-bootstrap';
import { SearchModalComponent } from '../search-modal/search-modal.component';
import { FormLoginModule } from 'src/app/component/form-login/form-login.module';

@NgModule({
    declarations: [
        HomeComponent,
        SearchModalComponent
    ],
    imports: [
        SisainSharedModule,
        HomeRoutingModule,
        FormLoginModule,
        PopoverModule.forRoot(),
        ModalModule.forRoot(),
        TabsModule.forRoot()

    ],
    entryComponents: [
        SearchModalComponent
    ]
})

export class HomeModule { }