// shared.module.ts

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { SelectComponent } from './components/select/select.component';
import { ProductComponent } from '../products/components/product/product.component';
import { AllProductsComponent } from '../products/components/all-products/all-products.component';
@NgModule({
  declarations: [
    NavbarComponent,
    SelectComponent,
    ProductComponent,
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      backdropBackgroundColour: "rgba(0,0,0,0.1)",
      backdropBorderRadius: "4px",
      primaryColour: "#ffffff",
      secondaryColour: "#ffffff",
      tertiaryColour: "#ffffff",
    }),
  ],
  exports: [
    NavbarComponent,
    FormsModule,
    AllProductsComponent,
    SelectComponent,
    ProductComponent
  ]
})
export class SharedModule { }
