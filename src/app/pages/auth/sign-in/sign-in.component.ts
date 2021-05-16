import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  signinForm = this.fb.group({
    email: [''],
    password: [''],
    city: [''],
    state: [''],
    address: [''],
    zipcode: [''],
  });

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
  ) {}

  onSubmit() {
    this.apiService
      .postUser(this.signinForm.value)
      .toPromise()
      .then(() => this.router.navigate(['/auth/login']));
  }
}
