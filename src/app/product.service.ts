import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: any[] = [];

  constructor() {
    const saved = localStorage.getItem('products');
    this.products = saved ? JSON.parse(saved) : [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(prod: any) {
    prod.id = this.products.length + 1;
    this.products.push(prod);
    this.save();
  }

  private save() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  updateProduct(updated: any) {
  const index = this.products.findIndex(p => p.id === updated.id);
  if (index !== -1) {
    this.products[index] = { ...updated };
  }
}

deleteProduct(id: number) {
  this.products = this.products.filter(p => p.id !== id);
}

}
