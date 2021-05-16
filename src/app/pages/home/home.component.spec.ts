import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import {
  RenderResult,
  RenderComponentOptions,
  render,
  screen,
  fireEvent,
} from '@testing-library/angular';
import * as faker from 'faker';
import { NgxMaskModule } from 'ngx-mask';
import { of } from 'rxjs';
import { ProductsDTO } from 'src/app/core/models/products';
import { ApiService } from 'src/app/core/services/api.service';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { CardComponent } from 'src/app/shared/card/card.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let componentEl: RenderResult<HomeComponent, HomeComponent>;
  let fixture: ComponentFixture<HomeComponent>;

  const mockProducts: ProductsDTO[] = [
    {
      create_at: faker.date.past().toISOString(),
      id: faker.datatype.uuid(),
      image: faker.image.food(),
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      update_at: faker.date.past().toISOString(),
    },
    {
      create_at: faker.date.past().toISOString(),
      id: faker.datatype.uuid(),
      image: faker.image.food(),
      name: faker.commerce.product(),
      price: '1000000000000',
      update_at: faker.date.past().toISOString(),
    },
  ];

  const apiServiceSpy = {
    postUser: () => of(true),
    getProducts: () => of(mockProducts),
  };

  const renderOptions: RenderComponentOptions<HomeComponent> = {
    declarations: [ButtonComponent, CardComponent],
    imports: [
      NgxMaskModule.forRoot(),
      NgxMaskModule.forChild(),
      ReactiveFormsModule,
      HttpClientModule,
      RouterTestingModule,
    ],
    providers: [
      {
        provide: ApiService,
        useValue: apiServiceSpy,
      },
    ],
  };

  beforeEach(async () => {
    componentEl = await render(HomeComponent, renderOptions);
    fixture = componentEl.fixture;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be select card', async () => {
    component.products$.subscribe(console.log);
    fixture.detectChanges();

    await fixture.whenStable();

    const card = screen.getAllByTestId('card')[0];
    const card2 = screen.getAllByTestId('card')[1];

    fireEvent.click(card);

    expect(component.selectedProducts.length).toEqual(1);

    fireEvent.click(card);

    expect(component.selectedProducts.length).toEqual(0);

    fireEvent.click(card);

    expect(component.selectedProducts.length).toEqual(1);

    fireEvent.click(card2);

    expect(component.selectedProducts.length).toEqual(1);
  });
});
