import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor( private http: HttpClient) { }

  getInsurances() {
    const url = `${environment.endpoint}insurance`;
    return this.http.get(url, {});
  }
}
