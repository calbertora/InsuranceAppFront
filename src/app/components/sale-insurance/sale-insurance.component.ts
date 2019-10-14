import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InsuranceService } from 'src/app/services/insurance.service';

@Component({
  selector: 'app-sale-insurance',
  templateUrl: './sale-insurance.component.html',
  styleUrls: ['./sale-insurance.component.css']
})
export class SaleInsuranceComponent implements OnInit {

  insuranceSaleForm: FormGroup;
  insurances: any;

  constructor( private insuranceService: InsuranceService) {
    this.insurances = [];
  }

  ngOnInit() {

    this.insuranceSaleForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      occupation: new FormControl('', Validators.required),
      insurance: new FormControl('', Validators.required)
    });

    this.insuranceService.getInsurances().subscribe(response => {
      this.insurances = response;
    });
  }

  onSubmit() {

    let clientInsurances = [];

    this.insuranceSaleForm.controls.insurance.value.forEach(x => {
      clientInsurances.push(this.insurances.find( val => val.Id == x));
    });

    let formData = {
      ID: this.insuranceSaleForm.controls.id.value,
      Name: this.insuranceSaleForm.controls.name.value,
      Occupation: this.insuranceSaleForm.controls.occupation.value,
      insurance: clientInsurances
    };

  }

}
