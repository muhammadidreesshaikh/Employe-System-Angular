import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserFormsModule } from './pages/user-forms/user-forms.module';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'main-dashboard',
    pathMatch: 'full',
  }, 
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      },
      {
        path: 'user-forms',
        component: UserFormsModule,
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'main-dashboard'
  }
]
