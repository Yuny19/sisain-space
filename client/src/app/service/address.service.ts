import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Address } from './../model';
import { constant } from '../../environments/constant';
import { AppModule } from '../app.module';
import { Observable } from 'rxjs';

@Injectable({ providedIn: AppModule })
export class AddressService {
    url = constant.addressURL;

    constructor(private http: HttpClient) { }

    getAll(): Observable<Array<Address>> {
        return this.http.get<Array<Address>>(`${this.url}/`);
    }

    get(id: string): Observable<Address> {
        return this.http.get<Address>(`${this.url}/${id}`);
    }

    add(newData: any): Observable<Address> {
        return this.http.post<Address>(`${this.url}`, newData);
    }

    edit(id: string, edited: any): Observable<Address> {
        return this.http.put<Address>(`${this.url}/${id}`, edited);
    }

    delete(id: string): Observable<Address> {
        return this.http.delete<Address>(`${this.url}/${id}`);
    }
}