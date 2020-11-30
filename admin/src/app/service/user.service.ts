import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { constant } from '../../environments/constant';
import { AppModule } from '../app.module';
import { User } from '../model';
import { BaseCrudService } from '../lib/service/base-crud.service';

@Injectable({ providedIn: AppModule })
export class UserService extends BaseCrudService<User>{

    constructor(http: HttpClient) {
        super(http, `${constant.userURL}`);
    }

   

}