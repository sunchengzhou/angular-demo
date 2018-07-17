import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { GirlfriendComponent } from './girlfriend/girlfriend.component';


@NgModule({
  declarations: [   //组件  指令 管道
    OrderComponent,
    GirlfriendComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,  //  浏览器模块
    FormsModule,     //   表单双向绑定模块
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
