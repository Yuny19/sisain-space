import { Location } from '@angular/common';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Store} from '@ngrx/store'
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NameInterface } from 'src/app/store/model/name.model';
import { LoginService, UserService } from '../../service';
import { normalizeFlag } from '../../utils/form.util';
import { addName } from 'src/app/store/lib/name.reducer';

@Component({
    selector: 'form-login',
    templateUrl: './form-login.component.html',
    styleUrls: ['./form-login.component.scss']
})

export class FormLoginComponent implements OnInit {

    formLogin: FormGroup;
    formRegister: FormGroup;
    modalRef: BsModalRef | null;

    constructor(private formBuilder: FormBuilder,
        private loginService: LoginService,
        private toastrService: ToastrService,
        public location: Location,
        private router: Router,
        private userService: UserService,
        private bsModalService: BsModalService,
        private store: Store<{ nameREducers: NameInterface}>
    ) {
        this.formLogin = formBuilder.group({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
        this.formRegister = formBuilder.group({
            name: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            copassword: new FormControl('', Validators.required) 
        });
    }

    ngOnInit() { }

    get email() { return this.formLogin.get('email'); }
    get password() { return this.formLogin.get('password'); }
    get reemail() { return this.formRegister.get('email'); }
    get repassword() { return this.formRegister.get('password'); }
    get name() { return this.formRegister.get('name'); }
    get copassword() { return this.formRegister.get('copassword'); }

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

    register() {
        this.formRegister.markAllAsTouched();
        if (!this.formRegister.valid) {
            return;
        }

        this.userService.create(normalizeFlag(this.formRegister)).subscribe(()=>{
            this.router.navigateByUrl('/login');
            this.toastrService.success('thanks for join with Us');
        });

    }
}