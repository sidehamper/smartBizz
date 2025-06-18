import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
  standalone: false
})
export class ViewProductComponent implements OnInit {
  products: any[] = [];
  editMap: { [id: number]: boolean } = {};

  constructor(
    private productService: ProductService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  updateProduct(product: any): void {
    this.productService.updateProduct(product); // Add this method in product.service.ts
    this.editMap[product.id] = false;
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id); // Add this method in product.service.ts
    this.products = this.products.filter(p => p.id !== id);
  }
}
