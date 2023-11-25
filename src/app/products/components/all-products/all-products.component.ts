import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {

  products = []
  // categories = []
  // selectedCategory
  categories: string[] = ['Category1', 'Category2', 'Category3']; // Replace with your actual categories
  selectedCategory: string = ''; // Set a default value if needed

  constructor(private service: ProductsService){

  }

  ngOnInit(): void{
    this.getProducts()
    this.getCategories()
  }

  getProducts(){
    this.service.getAllProducts().subscribe((res:any)=>{
      console.log(res)
      this.products = res
      console.log(res)
    })
  }

  getCategories(){
    this.service.getAllCategories().subscribe((res:any)=>{
      console.log(res)
      // this.categories = res
    })
  }
}
