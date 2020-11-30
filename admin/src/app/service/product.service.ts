import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { constant } from '../../environments/constant';
import { AppModule } from '../app.module';
import { BaseCrudService } from '../lib/service/base-crud.service';
import { Product } from '../model';

@Injectable({ providedIn: AppModule })
export class ProductService extends BaseCrudService<Product>{

    constructor(http: HttpClient) {
        super(http, `${constant.productURL}`);
    }
}