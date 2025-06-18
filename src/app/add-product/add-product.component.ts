import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  standalone:false
})
export class AddProductComponent {
  name = '';
  price: number | null = null;
  stock: number | null = null;
  success = '';

  constructor(private productService: ProductService) {}

  addProduct() {
    if (this.name && this.price !== null && this.stock !== null) {
      this.productService.addProduct({
        name: this.name,
        price: this.price,
        stock: this.stock
      });
      this.success = 'Product added successfully!';
      this.name = '';
      this.price = null;
      this.stock = null;
    }
  }
}
