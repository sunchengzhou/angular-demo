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
  providers: [ProductService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
