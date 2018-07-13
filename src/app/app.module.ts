import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Code404Component } from './code404/code404.component';
import { BindComponent } from './bind/bind.component';
import { FormsModule } from '@angular/forms';
import { MultipipePipe } from './pipes/multipipe.pipe';


@NgModule({
  declarations: [   //组件  指令 管道
    AppComponent,
    Code404Component,
    BindComponent,
    MultipipePipe,
  ],
  imports: [
    BrowserModule,  //  浏览器模块
    FormsModule,     //   表单双向绑定模块
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
