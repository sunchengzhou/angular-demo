import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products: Array<Product> =[
    new Product(1,"荣耀助手",1.99,3.5,"第一个商品",["描述一","描述二"]),
    new Product(2,"随便起个名字",2.99,4.5,"第二个商品",["描述一","描述二"]),
    new Product(3,"想不到名字了",1.69,2,"第三个商品",["描述一","描述二"])
  ]
  constructor() { }
  // 函数返回值，记得注明返回值类型
  getProduct(): Array<Product> {
    return this.products;
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price:number,
    public rating: number,
    public desc:string,
    public category:Array<string>
  ) {}
}