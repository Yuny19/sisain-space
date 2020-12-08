import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { constant } from '../../environments/constant';
import { AppModule } from '../app.module';
import { Order } from '../model';

@Injectable({ providedIn: AppModule })

export class OrderService {
    url = constant.orderURL;

    constructor(private http: HttpClient) { }

    getAll(): Observable<Array<Order>> {
        return this.http.get<Array<Order>>(`${this.url}/`);
    }

    get(id: string): Observable<Order> {
        return this.http.get<Order>(`${this.url}/${id}`);
    }

    add(newData: any): Observable<Order> {
        return this.http.post<Order>(`${this.url}`, newData);
    }

    edit(id: string, edited: any): Observable<Order> {
        return this.http.put<Order>(`${this.url}/${id}`, edited);
    }

    delete(id: string): Observable<Order> {
        return this.http.delete<Order>(`${this.url}/${id}`);
    }

    getByUser(): Observable<Order[]>{
        return this.http.get<Order[]>(`${this.url}/user`)
    }
}
