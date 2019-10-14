import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleInsuranceComponent } from './sale-insurance.component';

describe('SaleInsuranceComponent', () => {
  let component: SaleInsuranceComponent;
  let fixture: ComponentFixture<SaleInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
