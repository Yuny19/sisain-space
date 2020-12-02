import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model';
import { ProductService } from '../../service';

@Component({
    templateUrl: './decoration.component.html'
})

export class DecorationComponent {

    products: Product[];
    category: string;

    constructor(private productService: ProductService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.category = this.activatedRoute.snapshot.data.category;

        this.getProduct(this.category);
    }

    getProduct(category: string) {
        this.productService.getByCategory(category).subscribe((data) => {
            this.products = data;
        })
    }
}