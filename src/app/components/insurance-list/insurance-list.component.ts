import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/services/insurance.service';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css']
})
export class InsuranceListComponent implements OnInit {

  insurances: any;
  constructor( private insuranceService: InsuranceService) {
    this.insurances = [];
  }

  ngOnInit() {
    this.insuranceService.getInsurances().subscribe(
      response => {
        this.insurances = response;
        console.log(response);

      }
    );
  }

  deleteInsurance(insuranceId) {
    console.log(insuranceId);

  }

}
