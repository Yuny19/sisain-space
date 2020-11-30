import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { constant } from '../../environments/constant';
import { AppModule } from '../app.module';
import { BaseCrudService } from '../lib/service/base-crud.service';
import { Transaction } from '../model';

@Injectable({ providedIn: AppModule })
export class TransactionService extends BaseCrudService<Transaction>{
    
    constructor(http: HttpClient){
        super(http, `${constant.transactionURL}`);
    }
}