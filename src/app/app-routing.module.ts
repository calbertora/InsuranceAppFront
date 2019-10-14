import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InsuranceFormComponent } from './components/insurance-form/insurance-form.component';
import { InsuranceListComponent } from './components/insurance-list/insurance-list.component';
import { SaleInsuranceComponent } from './components/sale-insurance/sale-insurance.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'insurance-form', component: InsuranceFormComponent},
  {path: 'insurance-list', component: InsuranceListComponent},
  {path: 'sale-insurance', component: SaleInsuranceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
