import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
// 装饰器可以注入别的服务
@Injectable()
export class ProductService {

  constructor(public logger:LoggerService) { }

  getProduct(): Product {
    this.logger.log('productService runing!')
    return new Product(0, 'iphone7', 6999, '苹果品牌');
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) {}
}