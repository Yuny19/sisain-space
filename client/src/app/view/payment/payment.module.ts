import { NgModule } from "@angular/core";
import { SisainSharedModule } from 'src/app/shared/sisain-shared.module';
import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';

@NgModule({
    declarations: [
        PaymentComponent
    ],
    imports: [
        SisainSharedModule,
        PaymentRoutingModule
    ]
})

export class PaymentModule{}