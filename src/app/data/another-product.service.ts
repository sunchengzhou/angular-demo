import { Injectable } from '@angular/core';
import { ProductService, Product } from './product.service';
import { LoggerService } from './logger.service';


@Injectable()
export class AnotherProductService implements ProductService {
  constructor(public logger:LoggerService) { }
  getProduct(): Product {
    this.logger.log('antherSevice runing!')
    return new Product(2, 'mate10', 3666, '华为品牌');
  }


}