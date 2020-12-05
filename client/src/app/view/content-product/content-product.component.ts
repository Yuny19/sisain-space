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

    constructor(private productService: ProductService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() { 
        this.category = this.activatedRoute.snapshot.data.category;

        this.productService.getByCategory(this.category).subscribe((data) => {
            this.products = data;
        });
    }

    image() {
        switch (this.category) {
            case 'bedroom': {
                return '../../../assets/img/slider/bedroom.png';
            }
            case 'living room': {
                return '../../../assets/img/slider/livingroom.png';
            }
            case 'dining room': {
                return '../../../assets/img/slider/diningroom.png';
            }
            case 'workspace': {
                return '../../../assets/img/slider/workspace.png';
            }
            case 'decoration': {
                return '../../../assets/img/slider/decoration.png';
            }
        }
    }
}