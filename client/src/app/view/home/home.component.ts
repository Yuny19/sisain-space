import { Component, OnInit } from "@angular/core";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    modalRef: BsModalRef | null;
    token: string;
    html: string = `<p>nothing shopping list</p>
    <span class="btn-shop">Shop Now</span>`;

    constructor(private bsModalService: BsModalService){}
    ngOnInit() {
        this.token = localStorage.getItem('token');
    }

    openModalLogin(){
        this.modalRef = this.bsModalService.show(LoginModalComponent, { class: 'modal-lg' });
    }
}