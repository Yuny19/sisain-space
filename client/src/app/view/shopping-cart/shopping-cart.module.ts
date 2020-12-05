import { NgModule } from "@angular/core";
import { SisainSharedModule } from '../../shared/sisain-shared.module';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';

@NgModule({
    declarations: [
        ShoppingCartComponent
    ],
    imports: [
        SisainSharedModule,
        ShoppingCartRoutingModule
    ]
})

export class ShoppingCartModule { }