import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../data/product.service';
import { AnotherProductService } from '../data/another-product.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  providers:[{provide: ProductService, useClass: AnotherProductService}]
})
export class Product2Component implements OnInit {
  private product: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
    console.log(this.product)
  }

}
