import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 19.99, imageUrl: 'assets/product1.jpg' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 29.99, imageUrl: 'assets/product2.jpg' },
    { id: 3, name: 'Product 3', description: 'Description for Product 3', price: 39.99, imageUrl: 'assets/product3.jpg' },
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }
}
