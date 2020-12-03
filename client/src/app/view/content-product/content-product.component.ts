import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model';
import { ProductService } from '../../service';

@Component({
    styleUrls: ['./content-product.component.scss'],
    templateUrl: './content-product.component.html'
})

export class ContentProductComponent {

    products: Product[];
    category: string;
    url: string;

    constructor(private productService: ProductService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.category = this.activatedRoute.snapshot.data.category;

        this.getProduct(this.category);

        switch (this.category) {
            case 'bedroom': {
                this.url = '../../../assets/img/slider/bedroom.png';
                break;
            }
            case 'living room': {
                this.url = '../../../assets/img/slider/livingroom.png';
                break;
            }
            case 'dining room': {
                this.url = '../../../assets/img/slider/diningroom.png';
                break;
            }
            case 'workspace': {
                this.url = '../../../assets/img/slider/workspace.png';
                break;
            }
            case 'decoration': {
                this.url = '../../../assets/img/slider/decoration.png';
                break;
            }
            default: {
                console.log("Invalid choice");
                break;
            }
        }
    }

    getProduct(category: string) {
        this.productService.getByCategory(category).subscribe((data) => {
            this.products = data;
        })
    }
}