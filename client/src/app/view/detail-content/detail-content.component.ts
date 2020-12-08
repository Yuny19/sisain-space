import { Location } from '@angular/common';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/model';
import { OrderService, ProductService } from 'src/app/service';
import { normalizeFlag } from 'src/app/utils/form.util';

@Component({
    templateUrl: './detail-content.component.html',
    styleUrls: ['./detail-content.component.scss']
})

export class DetailContentComponent implements OnInit {

    id: string;
    product: Product;
    qty: number = 1;
    form: FormGroup;

    constructor(private activatedRoute: ActivatedRoute,
        private productService: ProductService,
        private formBuilder: FormBuilder,
        private orderService: OrderService,
        private router: Router,
        private toastrService: ToastrService,
        public location: Location) {
        this.form = formBuilder.group({
            total: new FormControl(null),
            product: new FormControl(null)
        })
    }

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');

        this.productService.get(this.id).subscribe((data) => {
            this.product = data;
        });
    }

    add() {
        this.qty = this.qty + 1;
    }

    minus() {
        if (this.qty == 0) {
            this.qty = 0
        } else {
            this.qty = this.qty - 1;
        }
    }

    addOrder() {

        let token = localStorage.getItem('token');
        if (!token) {
            this.router.navigateByUrl('/login');
        }
        else {
            this.form.get('total').setValue(this.qty);
            this.form.get('product').setValue(this.id);

            this.orderService.add(normalizeFlag(this.form)).subscribe(() => {
                this.location.back();
                this.toastrService.success('order have been added');
            });
        }


    }
}