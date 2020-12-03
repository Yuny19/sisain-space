import { Component } from "@angular/core";
import { BsModalRef } from 'ngx-bootstrap';


@Component({
    selector: 'login-modal',
    styleUrls: ['./login-modal.component.scss'],
    templateUrl: './login-modal.component.html'
})

export class LoginModalComponent{

    closeBtnName: string;
    
    constructor(public bsModalRef: BsModalRef){}
}