import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector:'card',
    styleUrls: ['./card.component.scss'],
    templateUrl: './card.component.html'
})

export class CardComponent implements OnInit{
    @Input() statement: string;
    @Input() classes: string;

    constructor(){}

    ngOnInit(){}

}