import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product,ProductService } from '../data/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  private products:Array<Product>;
  private myPro:any;
  constructor(private routeInfo: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.productId = this.routeInfo.snapshot.params["prodId"];
    this.products = this.productService.getProduct();
    console.log(this.products)
    this.myPro = this.products.filter((item) => {
      return item.id == Number(this.productId);
    })[0];

    console.log(this.myPro)
  }

}
