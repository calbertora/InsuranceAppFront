import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { InsuranceService } from 'src/app/services/insurance.service';

@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.component.html',
  styleUrls: ['./insurance-form.component.css']
})
export class InsuranceFormComponent implements OnInit {

  insuranceForm: FormGroup;
  invalidPercentage: boolean;
  formData: any;
  typeOfRisks: any;
  typeOfCoverages: any;

  constructor(private router: Router, private insuranceService: InsuranceService) {

    this.formData = {};

    this.insuranceForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      date: new FormControl('', Validators.required),
      coverage: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      riskType: new FormControl('', Validators.required),
      coveragePercentage: new FormControl('', [Validators.required, Validators.max(100), Validators.min(0)]),
      policyTypes: new FormControl('', Validators.required),
    });

    this.typeOfRisks = insuranceService.typeOfRisk;
    this.typeOfCoverages = insuranceService.typeOfCoverage;
  }

  ngOnInit() {
  }

  onSubmit() {

    let policyTypes = [];

    if (this.insuranceForm.invalid) {
      return;
    }

    if (this.insuranceForm.controls.riskType.value === '4' && this.insuranceForm.controls.coveragePercentage.value > 50) {
      this.invalidPercentage = true;
      return;
    }

    policyTypes = this.insuranceForm.controls.policyTypes.value.map(val => {
      return {
        ID: val,
        Description: this.typeOfCoverages.find(desc => desc.id = val).description
      };
    });

    this.formData = {
      PolicyTypes: policyTypes,
      Name: this.insuranceForm.controls.name.value,
      Description: this.insuranceForm.controls.description.value,
      InitialDate: this.insuranceForm.controls.date.value,
      Coverage: this.insuranceForm.controls.coverage.value,
      Price: this.insuranceForm.controls.price.value,
      TypeOfRisk: this.insuranceForm.controls.riskType.value,
      CoveragePercentage: this.insuranceForm.controls.coveragePercentage.value
    };

    this.insuranceService.postInsurance(this.formData).subscribe(response => console.log(response), error => {return;});

    this.invalidPercentage = false;
    this.insuranceForm.reset();

    this.router.navigate(['/']).then(() => { return; });
  }

}
