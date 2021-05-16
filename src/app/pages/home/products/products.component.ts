import { Component, OnInit } from '@angular/core';
import { ProductsDTO } from 'src/app/core/models/products';
import { ELOCAL_STORAGE } from 'src/app/utils/constants/ElocalStorage';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  get products(): ProductsDTO[] {
    return JSON.parse(
      localStorage.getItem(ELOCAL_STORAGE.products) || ''
    ) as ProductsDTO[];
  }
}
