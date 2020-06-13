import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormsContainerComponent } from './user-forms-container.component';

describe('UserFormsContainerComponent', () => {
  let component: UserFormsContainerComponent;
  let fixture: ComponentFixture<UserFormsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
