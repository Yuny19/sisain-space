import { Component, OnInit } from "@angular/core";
import { Product } from 'src/app/model';
import { ProductService } from '../../service';

@Component({
    styleUrls: ['./home-page.component.scss'],
    templateUrl: './home-page.component.html'
})

export class HomePageComponent implements OnInit {

    products: Product[];

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.getProduct();
     }

    getProduct() {
        this.productService.getAll().subscribe((data) => {
            this.products = data;
        })
    }
}