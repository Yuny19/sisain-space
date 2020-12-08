import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SearchModalComponent } from '../search-modal/search-modal.component';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    modalRef: BsModalRef | null;
    name: string;
    html: string = `<p>nothing shopping list</p>
    <span class="btn-shop">Shop Now</span>`;

    constructor(private bsModalService: BsModalService,
        private router: Router){}
    ngOnInit() {
        this.name = localStorage.getItem('name');
    }

    openModalSearch(){
        this.modalRef = this.bsModalService.show(SearchModalComponent, { class: 'modal-lg' });
    }

    logOut() {
        localStorage.clear();
        location.href="http://localhost:4200/";
    }
}