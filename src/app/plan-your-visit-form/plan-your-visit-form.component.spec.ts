import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanYourVisitFormComponent } from './plan-your-visit-form.component';

describe('PlanYourVisitFormComponent', () => {
  let component: PlanYourVisitFormComponent;
  let fixture: ComponentFixture<PlanYourVisitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanYourVisitFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanYourVisitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
