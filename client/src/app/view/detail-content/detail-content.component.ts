import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model';
import { ProductService } from 'src/app/service';

@Component({
    templateUrl: './detail-content.component.html',
    styleUrls: ['./detail-content.component.scss']
})

export class DetailContentComponent implements OnInit {

    id: string;
    product: Product;
    qty: number = 1;

    constructor(private activatedRoute: ActivatedRoute,
        private productService: ProductService) { }

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
}