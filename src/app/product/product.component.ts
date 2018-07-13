import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../data/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  private imgUrl:string = "../../assets/image/miyue.jpg"
  constructor(private productService: ProductService) { }
  //  初始化时调用一次，生命周期的钩子
  ngOnInit() {
    this.products = this.productService.getProduct();
  }

}


