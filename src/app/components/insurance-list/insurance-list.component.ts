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
  constructor( private insuranceService: InsuranceService) {
    this.insurances = [];
    this.policyTypes = insuranceService.typeOfCoverage;
  }

  ngOnInit() {
    this.insuranceService.getInsurances().subscribe(
      response => {
        this.insurances = response;
      }
    );
  }

  deleteInsurance(insuranceId) {
    console.log(insuranceId);
  }

  getDescription(id) {
    return this.policyTypes.find( x => x.id == id).description;
  }

}
