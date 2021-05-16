import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsDTO } from 'src/app/core/models/products';
import { ApiService } from 'src/app/core/services/api.service';
import { ELOCAL_STORAGE } from 'src/app/utils/constants/ElocalStorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products$!: Observable<ProductsDTO[]>;

  pts = 1000

  selectedProducts: ProductsDTO[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.products$ = this.apiService.getProducts();
  }

  isSelected(product: ProductsDTO): boolean {
    const hasIndex = this.selectedProducts.indexOf(product);
    return hasIndex > -1;
  }

  onClick(product: ProductsDTO) {
    const hasIndex = this.selectedProducts.indexOf(product);

    if (hasIndex > -1) {
      this.selectedProducts = this.selectedProducts.filter(
        (target) => target != product
      );
      this.pts += +product.price
    }
    else {
      let pts = this.pts
      pts -= +product.price
      if(pts >= 0) {
        this.selectedProducts.push(product);
        this.pts = pts
      }
    }

    localStorage.setItem(ELOCAL_STORAGE.products, JSON.stringify(this.selectedProducts))
  }

}
