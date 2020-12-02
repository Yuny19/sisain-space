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

    getAll(): Observable<Array<Expedition>> {
        return this.http.get<Array<Expedition>>(`${this.url}/readAll`);
    }

    getProvince(): Observable<Array<Expedition>> {
        return this.http.get<Array<Expedition>>(
            `${this.url}/province`);
    }

    getCity(province: string): Observable<Array<Expedition>> {
        return this.http.get<Array<Expedition>>(
            `${this.url}/city`,
            {
                params: { province: province }
            }
        );
    }
}