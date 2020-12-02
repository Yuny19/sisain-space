import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { constant } from '../../environments/constant';
import { AppModule } from '../app.module';
import { User } from '../model';


@Injectable({ providedIn: AppModule })
export class LoginService {

    url = constant.userURL;

    constructor(private http: HttpClient) { }

    login(data: any): Observable<User> {
        return this.http.post<User>(
            `${this.url}/login/google`, data);
    }

    loginManual(data: any): Observable<User> {
        return this.http.post<User>(
            `${this.url}/login/manual`, data);
    }
} 