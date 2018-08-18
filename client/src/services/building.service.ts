import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";


import { ServiceUtil } from '../util/ServiceUtil';

@Injectable()

export class BuildingService {
    private component = "building";
    private url = ServiceUtil.apiUrl() + this.component;


    constructor(private http: HttpClient) { }

    public getBuilding(): Observable<any> {
        return this.http.get(this.url + '/', ServiceUtil.getHeaders())
        .pipe(map(ServiceUtil.extractData))
        .pipe(catchError(ServiceUtil.handleError));
    }
}




