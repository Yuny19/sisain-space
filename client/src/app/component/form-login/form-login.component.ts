import { Location } from '@angular/common';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Store} from '@ngrx/store'
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NameInterface } from '../../store/model/name.model';
import { LoginService } from '../../service';
import { normalizeFlag } from '../../utils/form.util';
import { addName } from '../../store/lib/name.reducer';

@Component({
    selector: 'form-login',
    templateUrl: './form-login.component.html',
    styleUrls: ['./form-login.component.scss']
})

export class FormLoginComponent implements OnInit {

    formLogin: FormGroup;
    modalRef: BsModalRef | null;

    constructor(private formBuilder: FormBuilder,
        private loginService: LoginService,
        private toastrService: ToastrService,
        public location: Location,
        private router: Router,
        private bsModalService: BsModalService,
        private store: Store<{ nameReducers: NameInterface}>
    ) {
        this.formLogin = formBuilder.group({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    ngOnInit() { }

    get email() { return this.formLogin.get('email'); }
    get password() { return this.formLogin.get('password'); }

    login() {
        this.formLogin.markAllAsTouched();
        if (!this.formLogin.valid) {
            return;
        }

        this.loginService.loginManual(normalizeFlag(this.formLogin)).subscribe((result)=>{
            this.store.dispatch(addName(result.name));
            localStorage.setItem('token', result.token);
            this.router.navigateByUrl('/home');
            this.toastrService.success('thanks for login');
        })
    }
}