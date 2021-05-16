import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {
  RenderResult,
  RenderComponentOptions,
  render,
} from '@testing-library/angular';
import { NgxMaskModule } from 'ngx-mask';
import { ProductsDTO } from 'src/app/core/models/products';
import { ApiService } from 'src/app/core/services/api.service';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { ELOCAL_STORAGE } from 'src/app/utils/constants';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let componentEl: RenderResult<ProductsComponent, ProductsComponent>;
  let fixture: ComponentFixture<ProductsComponent>;

  const apiServiceSpy = jasmine.createSpyObj('ApiService', [
    'postUser',
    'getProducts',
  ]);

  const renderOptions: RenderComponentOptions<ProductsComponent> = {
    declarations: [ButtonComponent],
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

  const mockProducts: ProductsDTO[] = [
    {
      create_at: '',
      id: '',
      image: '',
      name: 'prodoctMock',
      price: '1000',
      update_at: ''
    }
  ]

  beforeEach(async () => {
    localStorage.setItem(ELOCAL_STORAGE.products, JSON.stringify(mockProducts))
    componentEl = await render(ProductsComponent, renderOptions);
    fixture = componentEl.fixture;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able render without products', () => {
    localStorage.clear()
    expect(component).toBeTruthy();
  });
});
