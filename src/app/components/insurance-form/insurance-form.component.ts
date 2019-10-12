import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.component.html',
  styleUrls: ['./insurance-form.component.css']
})
export class InsuranceFormComponent implements OnInit {

  insuranceForm: FormGroup;
  invalidPercentage: boolean;
  formData: any;

  constructor(private router: Router) {

    this.formData = {};

    this.insuranceForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      date: new FormControl('', Validators.required),
      coverage: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      riskType: new FormControl('', Validators.required),
      coveragePercentage: new FormControl('', Validators.required),
      policyTypes: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }

  onSubmit() {

    console.log(this.insuranceForm);

    if (this.insuranceForm.invalid) {
      return;
    }

    if (this.insuranceForm.controls.riskType.value === '5' && this.insuranceForm.controls.coveragePercentage.value > 50) {
      this.invalidPercentage = true;
      return;
    }

    this.invalidPercentage = false;
    this.insuranceForm.reset();

    this.formData = {
      PolicyTypes: [],
      Id: 2,
      Name: 'Insurance 11_2',
      Description: 'Insurance 11_2 Test',
      InitialDate: '2019-11-10T00:00:00',
      Coverage: 4,
      Price: 50.0,
      TypeOfRisk: 1,
      CoveragePercentage: 0
  }
    this.router.navigate(['/']).then(() => { return; });
  }

}
