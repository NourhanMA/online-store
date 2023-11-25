import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AllProductsComponent,ProductDetailsComponent],
  
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,  
    FormsModule]
})
export class ProductsModule { }
