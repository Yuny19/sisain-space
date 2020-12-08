import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { constant } from '../../environments/constant';
import { AppModule } from '../app.module';
import { User } from '../model';

@Injectable({ providedIn: AppModule })

export class UserService {
    url = constant.userURL;

    constructor(private http: HttpClient) { }

    edit(id: string, edited: any): Observable<User> {
        return this.http.put<User>(`${this.url}/${id}`, edited);
    }

    create(newData: any): Observable<User> {
        return this.http.post<User>(`${this.url}`, newData);
    }

    delete(id: string): Observable<User> {
        return this.http.delete<User>(`${this.url}/${id}`);
    }

    getByUser() : Observable<User>{
        return this.http.get<User>(`${this.url}/readByUser`);
    }
}