import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalExcellanceComponent } from './operational-excellance.component';

describe('OperationalExcellanceComponent', () => {
  let component: OperationalExcellanceComponent;
  let fixture: ComponentFixture<OperationalExcellanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationalExcellanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationalExcellanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
