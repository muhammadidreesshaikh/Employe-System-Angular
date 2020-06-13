import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormsRoutingModule } from './user-forms-routing.module';
import { UserFormsContainerComponent } from './user-forms-container.component';
import { EmployeeHandbookFormComponent } from './employee-handbook-form/employee-handbook-form.component';
import { FormW4Component } from './form-w4/form-w4.component';
import { FormI9Component } from './form-i9/form-i9.component';
import { FormDirectDepositComponent } from './form-direct-deposit/form-direct-deposit.component';

@NgModule({
  declarations: [
    UserFormsContainerComponent, 
    EmployeeHandbookFormComponent, 
    FormW4Component, 
    FormI9Component, 
    FormDirectDepositComponent
  ],
  imports: [
    CommonModule,
    UserFormsRoutingModule
  ]
})
export class UserFormsModule { }
