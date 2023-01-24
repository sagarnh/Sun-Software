import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDigitalComponent } from './customer-digital.component';

describe('CustomerDigitalComponent', () => {
  let component: CustomerDigitalComponent;
  let fixture: ComponentFixture<CustomerDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDigitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
