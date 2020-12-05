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

    login() {
        this.loginService.login(normalizeFlag(this.formLogin)).subscribe((result)=>{
            localStorage.setItem('name', result.name);
            localStorage.setItem('token', result.token);
            this.router.navigateByUrl('/dashboard');
        })
    }
}