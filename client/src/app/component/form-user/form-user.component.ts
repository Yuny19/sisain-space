import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../service';
import { normalizeFlag } from '../../utils/form.util';

@Component({
    selector: 'form-user',
    templateUrl: './form-user.component.html',
    styleUrls: ['./form-user.component.scss']
})

export class FormUserComponent implements OnInit {

    formRegister: FormGroup;

    constructor(private formBuilder: FormBuilder,
        private toastrService: ToastrService,
        private userService: UserService,
        private router: Router
    ) {
        this.formRegister = formBuilder.group({
            name: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            copassword: new FormControl('', Validators.required) 
        });
    }

    ngOnInit() { }

    get reemail() { return this.formRegister.get('email'); }
    get repassword() { return this.formRegister.get('password'); }
    get name() { return this.formRegister.get('name'); }
    get copassword() { return this.formRegister.get('copassword'); }

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