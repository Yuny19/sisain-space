import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { normalizeFlag } from 'src/app/utils/form.util';
import { Transaction } from '../../model';
import { TransactionService } from '../../service';

@Component({
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})

export class PaymentComponent implements OnInit {

    id: string;
    transactions: Transaction;
    ongkir: number;
    subTotal: number;
    form: FormGroup;

    constructor(private activatedRoute: ActivatedRoute,
        private transactionService: TransactionService,
        private formBuilder: FormBuilder,
        private toastrService: ToastrService,
        private router: Router
    ) {
        this.form = formBuilder.group({
            payment: new FormControl(null),
            status: new FormControl('On Progress')
        });
    }

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');

        this.transactionService.get(this.id).subscribe((data) => {
            this.transactions = data;
        });

        this.ongkir = Number(localStorage.getItem('ongkir'));
        this.subTotal = Number(localStorage.getItem('subTotal'));
    }

    payNow(){
        if(this.form.value.payment == null){
            this.toastrService.warning('please select your payment method')
        }else{
            this.transactionService.edit(this.id, normalizeFlag(this.form)).subscribe(()=>{
                this.toastrService.success('Your transaction will be processed immediately');
                this.router.navigateByUrl('/home')
            })
        }
    }
}