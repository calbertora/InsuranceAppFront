import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/services/insurance.service';
import { splitAtColon } from '@angular/compiler/src/util';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css']
})
export class InsuranceListComponent implements OnInit {

  insurances: any;
  policyTypes = [];
  typeOfRisk = [];
  constructor( private insuranceService: InsuranceService) {
    this.insurances = [];
    this.policyTypes = insuranceService.typeOfCoverage;
    this.typeOfRisk = insuranceService.typeOfRisk;
  }

  ngOnInit() {
    this.getInsurances();
  }

  deleteInsurance(insuranceId) {

    this.insuranceService.deleteInsurance(insuranceId).subscribe(
      response => {
        this.getInsurances();
      }
    );

  }

  getDescription(id) {
    return this.policyTypes.find( x => x.id == id).description;
  }

  getTypeOfRisk(id) {
    return this.typeOfRisk.find( x => x.id == id).description;
  }

  getInsurances() {
    this.insuranceService.getInsurances().subscribe(
      response => {
        this.insurances = response;
      }
    );
  }

}
