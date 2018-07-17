import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [   //组件  指令 管道
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
