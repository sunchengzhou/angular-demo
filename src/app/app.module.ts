import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModelsComponent } from './models/models.component';


@NgModule({
  declarations: [   //组件  指令 管道
    AppComponent,
    HomeComponent,
    ModelsComponent 
  ],
  imports: [
    BrowserModule,   //浏览器模块
    FormsModule,     // 模板表单
    ReactiveFormsModule, // 响应式表单
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
