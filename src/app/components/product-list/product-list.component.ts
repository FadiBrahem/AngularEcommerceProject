import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 100, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 150, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', description: 'Description for Product 3', price: 200, imageUrl: 'https://via.placeholder.com/150' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product: Product): void {
    console.log('Added to cart:', product);
    // Implement your add to cart logic here
  }
}