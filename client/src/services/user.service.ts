



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";


import { ServiceUtil } from '../util/ServiceUtil';

@Injectable()

export class UserService {
    private component = "user";
    private url = ServiceUtil.apiUrl() + this.component;


    constructor(private http: HttpClient) { }

    public login(body): Observable<any> {
        return this.http.post(this.url + '/', body, ServiceUtil.getHeaders())
        .pipe(map(ServiceUtil.extractData))
        .pipe(catchError(ServiceUtil.handleError));
    }
}




