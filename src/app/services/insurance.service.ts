import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  typeOfRisk: any;
  typeOfCoverage: any;
  isEditActive = false;
  insuranceId: number;

  constructor( private http: HttpClient) {
    this.typeOfCoverage = [
      {id: 1, description: 'Incendio'},
      {id: 2, description: 'Inundación'},
      {id: 3, description: 'Terremoto'},
      {id: 4, description: 'Accidente'},
      {id: 5, description: 'Enfermedad'},
    ];

    this.typeOfRisk = [
      {id: 1, description: 'Bajo'},
      {id: 2, description: 'medio'},
      {id: 3, description: 'medio-alto'},
      {id: 4, description: 'Alto'}
    ];
  }

  getInsurances() {
    const url = `${environment.endpoint}insurance`;
    return this.http.get(url, {});
  }
  getInsurance(id) {
    const url = `${environment.endpoint}insurance/${id}`;
    return this.http.get(url, {});
  }

  postInsurance( insurance: any) {
    const url = `${environment.endpoint}insurance`;
    return this.http.post(url, insurance);
  }

  putInsurance( insurance: any) {
    const url = `${environment.endpoint}insurance`;
    return this.http.put(url, insurance);
  }

  deleteInsurance( insuranceId: any) {
    const url = `${environment.endpoint}insurance/${insuranceId}`;
    return this.http.delete(url, {});
  }

  postClient(usarData: any) {
    const url = `${environment.endpoint}user`;
    return this.http.post(url, usarData);
  }
}
