import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Code404Component } from './code404/code404.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { ProductService } from './data/product.service';
import { Product2Component } from './product2/product2.component';
import { LoggerService } from './data/logger.service';
import { AnotherProductService } from './data/another-product.service';


@NgModule({
  declarations: [   //组件  指令 管道
    AppComponent,
    HomeComponent,
    ProductComponent,
    Code404Component,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    Product2Component
  ],
  imports: [
    BrowserModule,   //浏览器模块
    AppRoutingModule  //路由模块
  ],
  // providers: [ProductService, LoggerService],
  providers: [{
    provide: ProductService,
    useFactory: (logger:LoggerService, appConfig) => {
      // let logger = new LoggerService();
      // let dev = Math.random() > 0.5;
      if(appConfig.dev) {
        return new ProductService(logger);
      } else {
        return new AnotherProductService(logger);
      }
    },
    deps:[LoggerService, "APP_CONFIG"]
  }, LoggerService,{
    provide:"APP_CONFIG", useValue: { dev:true}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
