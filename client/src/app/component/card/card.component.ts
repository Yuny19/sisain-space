import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/service';
import { normalizeFlag } from 'src/app/utils/form.util';

@Component({
    selector: 'card-product',
    styleUrls: ['./card.component.scss'],
    templateUrl: './card.component.html'
})

export class CardComponent implements OnInit {

    @Input() title: string;
    @Input() description: string;
    @Input() price: number;
    @Input() idProduk: string;
    @Input() image: string;

    form: FormGroup;

    constructor(private orderService: OrderService,
        private router: Router,
        private toastrService: ToastrService,
        private formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            product: new FormControl(null)
        })
    }

    ngOnInit() {
    }

    addOrder() {
        let token = localStorage.getItem('token');
        if (!token) {
            this.router.navigateByUrl('/login');
        }
        else {
            this.form.get('product').setValue(this.idProduk);
            this.orderService.add(normalizeFlag(this.form)).subscribe(() => {
                this.toastrService.success('order have been added');
            });
        }
    }
}