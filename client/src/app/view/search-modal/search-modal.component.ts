import { Component } from "@angular/core";
import { BsModalRef } from 'ngx-bootstrap';
import { ProductService } from 'src/app/service';
import { Product } from '../../model';


@Component({
    selector: 'search-modal',
    styleUrls: ['./search-modal.component.scss'],
    templateUrl: './search-modal.component.html'
})

export class SearchModalComponent {
    closeBtnName: string;
    products: Product[];

    constructor(public bsModalRef: BsModalRef,
        private productService: ProductService) { }

    getSearch(keyword: string) {
        this.productService.search(keyword).subscribe((data) => {
            this.products = data;
        });
    }
}