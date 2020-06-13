import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHandbookFormComponent } from './employee-handbook-form.component';

describe('EmployeeHandbookFormComponent', () => {
  let component: EmployeeHandbookFormComponent;
  let fixture: ComponentFixture<EmployeeHandbookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeHandbookFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeHandbookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
