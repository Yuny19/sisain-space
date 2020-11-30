import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { isFieldInvalid } from '../../../utils/input.util';
import { ExpeditionService } from '../../../service';
import { normalizeFlag } from '../../../utils/form.util';
import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: './form-expedition.component.html'
})

export class FormExpeditionComponent implements OnInit {

    id: string;
    isFieldInvalid = isFieldInvalid;
    form: FormGroup;
    editable: boolean = false;

    constructor(private activatedRoute: ActivatedRoute,
        public location: Location,
        private formBuilder: FormBuilder,
        private expeditionService: ExpeditionService,
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
            this.expeditionService.get(this.id).subscribe((data) => {
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
            this.expeditionService.edit(this.id, normalizeFlag(this.form)).subscribe(() => {
                this.toastrServie.success('expedition have been updated');
                this.location.back();
            });
        } else {
            this.expeditionService.add(normalizeFlag(this.form)).subscribe(() => {
                this.toastrServie.success('expedition have been created');
                this.location.back();
            });
        }
    }
}