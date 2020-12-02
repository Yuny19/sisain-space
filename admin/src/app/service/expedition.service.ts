import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { constant } from '../../environments/constant';
import { AppModule } from '../app.module';
import { PagedApiResponse } from '../lib/model/paged-api-response.model';
import { BaseCrudService } from '../lib/service/base-crud.service';
import { Expedition } from '../model';

@Injectable({ providedIn: AppModule })
export class ExpeditionService extends BaseCrudService<Expedition>{

    constructor(http: HttpClient) {
        super(http, `${constant.expeditionURL}`)
    }
}