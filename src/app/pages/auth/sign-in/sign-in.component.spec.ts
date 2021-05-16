import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {
  RenderResult,
  RenderComponentOptions,
  render,
  screen,
  fireEvent,
} from '@testing-library/angular';
import { NgxMaskModule } from 'ngx-mask';
import { of } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { ButtonComponent } from 'src/app/shared/button/button.component';

import { SignInComponent } from './sign-in.component';
import userEvent from '@testing-library/user-event';
import { Router } from '@angular/router';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let componentEl: RenderResult<SignInComponent, SignInComponent>;
  let fixture: ComponentFixture<SignInComponent>;

  const apiServiceSpy = {
    postUser: () => of(true),
    getProducts: () => of(true),
  };

  let mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };

  const renderOptions: RenderComponentOptions<SignInComponent> = {
    declarations: [ButtonComponent],
    imports: [
      NgxMaskModule.forRoot(),
      NgxMaskModule.forChild(),
      ReactiveFormsModule,
      HttpClientModule,
    ],
    providers: [
      {
        provide: ApiService,
        useValue: apiServiceSpy,
      },
      { provide: Router, useValue: mockRouter },
    ],
  };

  beforeEach(async () => {
    componentEl = await render(SignInComponent, renderOptions);
    fixture = componentEl.fixture;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render page ', () => {
    expect(
      screen.getByRole('heading', {
        name: /dotz/i,
      }),
    ).toBeTruthy();
    expect(
      screen.getByText(/controle seus pontos de forma muito simples/i),
    ).toBeTruthy();

    expect(
      screen.getByRole('button', {
        name: /cadastrar/i,
      }),
    ).toBeTruthy();
  });

  it('should be create user', () => {
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/senha/i);

    const cityInput = screen.getByPlaceholderText(/cidade/i);

    const stateInput = screen.getByPlaceholderText(/estado/i);

    const streetInput = screen.getByPlaceholderText(/rua/i);

    const postalCodeInput = screen.getByPlaceholderText(/código postal/i);

    const btnSubumit = screen.getByRole('button', {
      name: /cadastrar/i,
    });

    userEvent.type(emailInput, 'emai@email.com');
    userEvent.type(passwordInput, '123456');
    userEvent.type(cityInput, 'cityInput');
    userEvent.type(stateInput, 'streetInput');
    userEvent.type(streetInput, 'streetInput');
    userEvent.type(postalCodeInput, 'postalCodeInput');
    fireEvent.click(btnSubumit);

    setTimeout(() => {
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/auth/login']);
    });
  });
});
