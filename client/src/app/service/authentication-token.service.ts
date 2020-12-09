import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { constant } from 'src/environments/constant';
import { User } from '../model';

@Injectable({ providedIn: 'root' })
export class AuthenticationTokenService {

    constructor(private http: HttpClient) { }

    authToken(token: string): Observable<User> {
        return this.http.get<User>(`${constant.userURL}/readByUser`, {
            headers: {
                token: token
            }
        });
    }
}