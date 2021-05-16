import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginInComponent } from './login-in/login-in.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginInComponent,
  },
  {
    path: 'signin',
    component: SignInComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
