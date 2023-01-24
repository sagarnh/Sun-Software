import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyTransformationComponent } from './technology-transformation.component';

describe('TechnologyTransformationComponent', () => {
  let component: TechnologyTransformationComponent;
  let fixture: ComponentFixture<TechnologyTransformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyTransformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
