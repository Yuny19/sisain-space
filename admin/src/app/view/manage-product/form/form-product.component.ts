import { Location } from '@angular/common';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/model';
import { CategoryService, ProductService } from '../../../service';
import { normalizeFlag } from '../../../utils/form.util';
import { isFieldInvalid } from '../../../utils/input.util';


@Component({
    templateUrl: './form-product.component.html'
})

export class FormProductComponent implements OnInit {

    id: string;
    isFieldInvalid = isFieldInvalid;
    form: FormGroup;
    editable: boolean = false;
    categories: Category[];

    constructor(private activatedRoute: ActivatedRoute,
        public location: Location,
        private formBuilder: FormBuilder,
        private productService: ProductService,
        private toastrServie: ToastrService,
        private categoryService: CategoryService
    ) {
        this.form = formBuilder.group({
            name: new FormControl('', Validators.required),
            description: new FormControl(null),
            price: new FormControl('', Validators.required),
            stock: new FormControl('', Validators.required),
            gambar: new FormControl('', Validators.required),
            kategori: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.editable = this.activatedRoute.snapshot.data.editable;

        if (this.id) {
            this.productService.get(this.id).subscribe((data) => {
                this.form.get('price').setValue(data.price);
                this.form.get('name').setValue(data.name);
                this.form.get('description').setValue(data.description);
                this.form.get('stock').setValue(data.stock);
                this.form.get('kategori').setValue(data.kategori);

            });
        }

        this.getCategories();
    }

    getCategories() {
        this.categoryService.getAll().subscribe((data) => {
            this.setCategory(data);
        })
    }

    setCategory(data: any) {
        this.categories = data;
        console.log(data)
    }

    onSubmit() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return;
        }

        if (this.id) {
            this.productService.edit(this.id, normalizeFlag(this.form)).subscribe(() => {
                this.toastrServie.success('product have been updated');
                this.location.back();
            });
        } else {
            this.productService.add(normalizeFlag(this.form)).subscribe(() => {
                this.toastrServie.success('product have been created');
                this.location.back();
            });
        }
    }
}