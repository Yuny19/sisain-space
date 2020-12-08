import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { constant } from '../../environments/constant';
import { AppModule } from '../app.module';
import { Transaction } from '../model';

@Injectable({ providedIn: AppModule })

export class TransactionService {

    url = constant.transactionURL;

    constructor(private http: HttpClient) { }

    getAll(): Observable<Array<Transaction>> {
        return this.http.get<Array<Transaction>>(`${this.url}/readByUser`);
    }

    get(id: string): Observable<Transaction> {
        return this.http.get<Transaction>(`${this.url}/${id}`);
    }

    add(newData: any): Observable<Transaction> {
        return this.http.post<Transaction>(`${this.url}`, newData);
    }

    edit(id: string,newData: any): Observable<Transaction> {
        return this.http.put<Transaction>(`${this.url}/${id}`, newData);
    }
}