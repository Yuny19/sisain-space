import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageRequest } from '../model/page-request.model';
import { PagedApiResponse } from '../model/paged-api-response.model';

export abstract class BaseCrudService<T> {
    protected constructor(protected http: HttpClient, protected url: string) { }


    getTableRows(page: PageRequest): Observable<PagedApiResponse<T>> {
        return this.http.get<PagedApiResponse<T>>(
            `${this.url}`,
            {
                params: page.requestParam
            }
        );
    }

    getAll(): Observable<Array<T>> {
        return this.http.get<Array<T>>(`${this.url}/readAll`)
    }

    get(id: string): Observable<T> {
        return this.http.get<T>(`${this.url}/${id}`);
    }

    add(newData: any): Observable<T> {
        return this.http.post<T>(`${this.url}`, newData);
    }

    edit(id: string, edited: any): Observable<T> {
        return this.http.put<T>(`${this.url}/${id}`, edited);
    }

    delete(id: string): Observable<T> {
        return this.http.delete<T>(`${this.url}/${id}`);
    }
}