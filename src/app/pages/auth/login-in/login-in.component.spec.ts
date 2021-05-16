import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import {
  RenderComponentOptions,
  RenderResult,
  render,
  screen,
  fireEvent,
} from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { NgxMaskModule } from 'ngx-mask';
import { of } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { ButtonComponent } from 'src/app/shared/button/button.component';

import { LoginInComponent } from './login-in.component';

describe('LoginInComponent', () => {
  let component: LoginInComponent;
  let componentEl: RenderResult<LoginInComponent, LoginInComponent>;
  let fixture: ComponentFixture<LoginInComponent>;

  const apiServiceSpy = {
    postUser: () => of(true),
    getProducts: () => of(true),
  };

  let mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };

  const renderOptions: RenderComponentOptions<LoginInComponent> = {
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
    componentEl = await render(LoginInComponent, renderOptions);
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
        name: /entrar/i,
      }),
    ).toBeTruthy();
  });

  it('should be able login', () => {
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/senha/i);

    const btnSubumit = screen.getByRole('button', {
      name: /entrar/i,
    });

    userEvent.type(emailInput, 'emai@email.com');
    userEvent.type(passwordInput, '123456');
    fireEvent.click(btnSubumit);

    setTimeout(() => {
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/home']);
    });
  });
});
