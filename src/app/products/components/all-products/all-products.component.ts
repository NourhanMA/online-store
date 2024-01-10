import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {
  public loading = false
  products = []
  categories: string[] = [];

  constructor(private service: ProductsService) {
  }

  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

  getProducts() {
    this.loading = true
    this.service.getAllProducts().subscribe((res: any) => {
      console.log(res)
      this.products = res
      // console.log(res)
      this.loading = false
    }, error => {
      console.log(error)
    })
  }

  getCategories() {
    this.loading = true
    this.service.getAllCategories().subscribe((res: any) => {
      this.categories = res
      this.loading = false
      console.log(this.categories)
    })
  }

  getProductsbyCategory(value: string) {
    this.loading = true
    this.service.getProductsbyCategory(value).subscribe((res: any) => {
      this.products = res
      // console.log(this.products)
      this.loading = false
    })
  }

  selectedCategory(event) {
    // console.log(event)
    event != 'all' ?
      this.getProductsbyCategory(event) : this.getProducts()
  }

  getDetails(product) {
    // console.log(product)
  }
  cartProducts = []
  getCartItem(event) {
    this.cartProducts = []
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
      let exist = this.cartProducts.find(el => el.item.id == event.item.id)
      if (!exist) {
        this.cartProducts.push(event)
        localStorage.setItem('cart', JSON.stringify(this.cartProducts))
      }

    } else {
      this.cartProducts.push(event)
      localStorage.setItem('cart', JSON.stringify(this.cartProducts))
    }
  }
}
