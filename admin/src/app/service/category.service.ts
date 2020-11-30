import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { constant } from '../../environments/constant';
import { AppModule } from '../app.module';
import { BaseCrudService } from '../lib/service/base-crud.service';
import { Category } from '../model';

@Injectable({ providedIn: AppModule })
export class CategoryService extends BaseCrudService<Category>{

    constructor(http: HttpClient) {
        super(http, `${constant.categoryURL}`)
    }
}