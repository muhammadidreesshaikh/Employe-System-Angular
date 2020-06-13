import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFormsContainerComponent } from './user-forms-container.component';
import { EmployeeHandbookFormComponent } from './employee-handbook-form/employee-handbook-form.component';
import { FormW4Component } from './form-w4/form-w4.component';
import { FormI9Component } from './form-i9/form-i9.component';
import { FormDirectDepositComponent } from './form-direct-deposit/form-direct-deposit.component';

const routes: Routes = [
  {
    path: 'user-forms',
    component: UserFormsContainerComponent,
    children: [
      {
        path: '',
        component: EmployeeHandbookFormComponent
      },
      {
        path: 'employee-handbook',
        component: EmployeeHandbookFormComponent
      },
      {
        path: 'form-w4',
        component: FormW4Component
      },
      {
        path: 'form-I9',
        component: FormI9Component
      },
      {
        path: 'form-direct-deposit',
        component: FormDirectDepositComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserFormsRoutingModule { }
