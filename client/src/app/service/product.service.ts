import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { constant } from 'src/environments/constant';
import { AppModule } from '../app.module';
import { Product } from '../model';

@Injectable({ providedIn: AppModule })
export class ProductService {
    url = constant.productURL;
    constructor(private http: HttpClient) { }

    get(id: string): Observable<Product> {
        return this.http.get<Product>(`${this.url}/${id}`);
    }

    getAll(): Observable<Array<Product>> {
        return this.http.get<Array<Product>>(`${this.url}/readAll`);
    }

    getByCategory(category: string): Observable<Array<Product>> {
        return this.http.get<Array<Product>>(`${this.url}/category/${category}`)
    }
}