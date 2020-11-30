import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { isFieldInvalid } from '../../../utils/input.util';
import { normalizeFlag } from '../../../utils/form.util';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../../service';

@Component({
    templateUrl: './form-category.component.html'
})

export class FormCategoryComponent implements OnInit {

    id: string;
    isFieldInvalid = isFieldInvalid;
    form: FormGroup;
    editable: boolean = false;

    constructor(private activatedRoute: ActivatedRoute,
        public location: Location,
        private formBuilder: FormBuilder,
        private categoryService: CategoryService,
        private toastrServie: ToastrService
    ) {
        this.form = formBuilder.group({
            name: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.editable = this.activatedRoute.snapshot.data.editable;

        if (this.id) {
            this.categoryService.get(this.id).subscribe((data) => {
                this.form.patchValue(data);
            });
        }

    }

    onSubmit() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return;
        }

        if (this.id) {
            this.categoryService.edit(this.id, normalizeFlag(this.form)).subscribe(() => {
                this.toastrServie.success('category have been updated');
                this.location.back();
            });
        } else {
            this.categoryService.add(normalizeFlag(this.form)).subscribe(() => {
                this.toastrServie.success('category have been created');
                this.location.back();
            });
        }
    }
}