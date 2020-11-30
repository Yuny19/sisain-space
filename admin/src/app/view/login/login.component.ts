import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service';
import { normalizeFlag } from '../../utils/form.util'


@Component({
    selector: 'login',
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    title = "Join Mediyun";
    title2 = "No account ? ";
    title3 = "Create One";

    formLogin: FormGroup;

    constructor(private loginService: LoginService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
        this.formLogin = formBuilder.group({
            email: new FormControl(null),
            password: new FormControl(null)
        });
    }

    ngOnInit() { }

    setTitle() {
        if (this.title3 == "Create One") {
            this.title = "Register Mediyun";
            this.title2 = "Already have account ? ";
            this.title3 = "Sign in";
        } else if (this.title3 == "Sign in") {
            this.title = "Join Mediyun";
            this.title2 = "No account ? ";
            this.title3 = "Create One";
        }
    }

    login() {
        this.loginService.login(normalizeFlag(this.formLogin)).subscribe((result)=>{
            localStorage.setItem('name', result.name);
            localStorage.setItem('token', result.token);
            this.router.navigateByUrl('/dashboard');
        })
    }
}