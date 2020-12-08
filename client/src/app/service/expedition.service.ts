import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { constant } from '../../environments/constant';
import { AppModule } from '../app.module';
import { Expedition } from '../model';

@Injectable({ providedIn: AppModule })
export class ExpeditionService {

    url = constant.expeditionURL;

    constructor(private http: HttpClient) { }

    getAll(): Observable<Expedition[]> {
        return this.http.get<Expedition[]>(`${this.url}/readAll`);
    }

    getProvince(): Observable<any[]> {
        return this.http.get<any[]>(
            `${this.url}/province`);
    }

    getProvinceById(provId: string): Observable<any> {
        return this.http.get<any>(
            `${this.url}/province/${provId}`);
    }

    getCity(province: string): Observable<any[]> {
        return this.http.get<any[]>(
            `${this.url}/city/${province}`);
    }

    getCost(data: any): Observable<any[]>{
        return this.http.post<any[]>(`${this.url}/cost`, data);
    }

    get(id: string): Observable<Expedition>{
        return this.http.get<Expedition>(`${this.url}/${id}`);
    }
}