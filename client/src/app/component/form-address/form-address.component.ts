import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { Button } from 'protractor';
import { ExpeditionService } from 'src/app/service';
import { AddressService } from 'src/app/service/address.service';
import { normalizeFlag } from 'src/app/utils/form.util';

@Component({
    selector: 'form-address',
    templateUrl: './form-address.component.html',
    styles: ['Button{margin-bottom: 3rem;}']
})

export class FormAddressComponent implements OnInit {
    cities: any[];
    provinces: any[];
    form: FormGroup;

    constructor(private expeditionServie: ExpeditionService,
        private formBuilder: FormBuilder,
        private addressService: AddressService,
        public bsModalRef: BsModalRef) {
        this.form = formBuilder.group({
            name: new FormControl('', Validators.required),
            detail: new FormControl('', Validators.required),
            kecamatan: new FormControl('', Validators.required),
            kabKota: new FormControl('', Validators.required),
            provinsi: new FormControl('', Validators.required),
            kodepos: new FormControl('', Validators.required)
        })
     }

    ngOnInit() {
        this.expeditionServie.getProvince().subscribe((data) => {
            this.provinces = data;
        });
    }

    getCity(event: any){
        this.expeditionServie.getCity(event.province_id).subscribe((data)=>{
            this.cities = data
        })
    }

    get name() { return this.form.get('name'); }
    get detail() { return this.form.get('detail'); }
    get kecamatan() { return this.form.get('kecamatan'); }
    get kodepos() { return this.form.get('kodepos'); } 



    onSubmit(){
        this.form.markAllAsTouched();

        this.addressService.add(normalizeFlag(this.form)).subscribe(()=>{
            this.bsModalRef.hide();
        })
    }
}