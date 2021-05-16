import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginInComponent } from './login-in/login-in.component';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [LoginInComponent, SignInComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
  ],
})
export class AuthModule {}
