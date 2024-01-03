import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    // AllProductsComponent,
    
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})

export class ProductsModule { }
