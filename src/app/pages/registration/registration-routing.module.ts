import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreRegistrationsComponent } from './core-registration.component';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  {
    path: '',
    component: CoreRegistrationsComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            component: RegistrationComponent,
          },
        ]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'posts',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule { }
