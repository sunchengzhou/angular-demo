import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ProductDscComponent } from './product-dsc/product-dsc.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { Code404Component } from './code404/code404.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [   //组件  指令 管道
    AppComponent,
    HomeComponent,
    ProductComponent,
    CategoryComponent,
    ProductDscComponent,
    SellerInfoComponent,
    Code404Component,
    ChatComponent
  ],
  imports: [
    BrowserModule,   //浏览器模块
    AppRoutingModule  //路由模块
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
