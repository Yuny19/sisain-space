import { Component, Input } from "@angular/core";

@Component({
    selector: 'card-product',
    styleUrls: ['./card.component.scss'],
    templateUrl: './card.component.html'
})

export class CardComponent {

    @Input() title: string;
    @Input() description: string;
    @Input() price: number;
    @Input() idProduk: string;
    @Input() image: string;
}