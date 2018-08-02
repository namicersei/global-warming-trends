import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class UtilitiesService {
private url = 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/annualavg/tas/1920/1939/IND';
  constructor(private http: HttpClient) { }

  getData(): any {
    return this.http.get<any>(this.url);
  }
}
