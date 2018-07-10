import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>
  private imgUrl:string = "../../assets/image/miyue.jpg"
  constructor() { }
  //  初始化时调用一次，生命周期的钩子
  ngOnInit() {
    this.products = [
      new Product(1,"product one",1.99,3.5,"第一个商品",["描述一","描述二"]),
      new Product(2,"product two",2.99,4.5,"第一个商品",["描述一","描述二"]),
      new Product(3,"product three",1.69,2,"第一个商品",["描述一","描述二"])
    ]
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
