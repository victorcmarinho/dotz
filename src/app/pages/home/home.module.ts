import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LottieModule } from 'ngx-lottie';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [HomeComponent, ProductsComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, LottieModule],
})
export class HomeModule {}
