import { NgModule } from "@angular/core";
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap';
import { FormAddressComponent } from 'src/app/component/form-address/form-address.component';
import { SisainSharedModule } from '../../shared/sisain-shared.module';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';

@NgModule({
    declarations: [
        ShoppingCartComponent,
        FormAddressComponent
    ],
    imports: [
        SisainSharedModule,
        ShoppingCartRoutingModule,
        NgSelectModule,
        ModalModule.forRoot()
    ],
    entryComponents: [
        FormAddressComponent
    ]

})

export class ShoppingCartModule { }