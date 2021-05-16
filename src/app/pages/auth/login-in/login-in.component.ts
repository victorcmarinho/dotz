import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.scss'],
})
export class LoginInComponent {
  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
  ) {}

  onSubmit() {
    this.apiService
      .postUser(this.loginForm.value)
      .toPromise()
      .then(() => this.router.navigate(['/home']));
  }
}
