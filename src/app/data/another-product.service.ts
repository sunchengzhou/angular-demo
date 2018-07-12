import { Injectable } from '@angular/core';
import { ProductService, Product } from './product.service';

@Injectable()
export class AnotherProductService implements ProductService {
  constructor() { }
  getProduct(): Product {
    return new Product(2, 'mate10', 3666, '华为品牌');
  }


}