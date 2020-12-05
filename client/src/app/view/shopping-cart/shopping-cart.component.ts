import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'shopping-cart',
    styleUrls: ['./shopping-cart.component.scss'],
    templateUrl: './shopping-cart.component.html'
})

export class ShoppingCartComponent implements OnInit{

    ngOnInit(){
        console.log('hello')
    }
 }