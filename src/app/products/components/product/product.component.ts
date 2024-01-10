import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: any;
  @Output() item = new EventEmitter()
  addItem: boolean = false
  amount: number = 0
  addToCart() {
    this.item.emit({ item: this.product, quantity: this.amount })
  }
}
