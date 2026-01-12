import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialStatements } from './financial-statements';

describe('FinancialStatements', () => {
  let component: FinancialStatements;
  let fixture: ComponentFixture<FinancialStatements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialStatements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialStatements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
