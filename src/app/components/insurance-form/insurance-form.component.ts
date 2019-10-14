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
  typeOfRisks: any;
  typeOfCoverages: any;

  constructor(private router: Router, private insuranceService: InsuranceService) {
    let policyType = '';

    this.insuranceForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      date: new FormControl('', Validators.required),
      coverage: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      riskType: new FormControl('', Validators.required),
      coveragePercentage: new FormControl('', [Validators.required, Validators.max(100), Validators.min(0)]),
      policyTypes: new FormControl('', Validators.required),
    });

    if (insuranceService.isEditActive) {
      this.insuranceService.getInsurance(this.insuranceService.insuranceId).subscribe( response => {

        policyType = response['PolicyTypes'];

        this.insuranceForm.controls.id.setValue(response['Id']);
        this.insuranceForm.controls.name.setValue(response['Name']);
        this.insuranceForm.controls.description.setValue(response['Description']);
        this.insuranceForm.controls.date.setValue(response['InitialDate']);
        this.insuranceForm.controls.coverage.setValue(response['Coverage']);
        this.insuranceForm.controls.price.setValue(response['Price']);
        this.insuranceForm.controls.riskType.setValue(response['TypeOfRisk']);
        this.insuranceForm.controls.coveragePercentage.setValue(response['CoveragePercentage']);
        this.insuranceForm.controls.policyTypes.setValue(policyType.split(',').map( Number ));

        console.log(this.insuranceForm);

      });
    }

    this.typeOfRisks = insuranceService.typeOfRisk;
    this.typeOfCoverages = insuranceService.typeOfCoverage;
  }

  ngOnInit() {
  }

  onSubmit() {

    let formData = {};
    let policyTypes = '';

    if (this.insuranceForm.invalid) {
      return;
    }

    if (this.insuranceForm.controls.riskType.value === '4' && this.insuranceForm.controls.coveragePercentage.value > 50) {
      this.invalidPercentage = true;
      return;
    }

    policyTypes = this.insuranceForm.controls.policyTypes.value.join(',');

    formData = {
      Id: this.insuranceForm.controls.id.value,
      PolicyTypes: policyTypes,
      Name: this.insuranceForm.controls.name.value,
      Description: this.insuranceForm.controls.description.value,
      InitialDate: this.insuranceForm.controls.date.value,
      Coverage: this.insuranceForm.controls.coverage.value,
      Price: this.insuranceForm.controls.price.value,
      TypeOfRisk: this.insuranceForm.controls.riskType.value,
      CoveragePercentage: this.insuranceForm.controls.coveragePercentage.value
    };

    if (this.insuranceService.isEditActive) {
      this.insuranceService.isEditActive = false;
      this.insuranceService.insuranceId = undefined;
      this.insuranceService.putInsurance(formData).subscribe(response => console.log(response), error => {return; });
    } else {
      this.insuranceService.postInsurance(formData).subscribe(response => console.log(response), error => {return; });
    }

    this.invalidPercentage = false;
    this.insuranceForm.reset();

    this.router.navigate(['/']).then(() => { return; });
  }

}
