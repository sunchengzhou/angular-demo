# angular程序架构

> 组件，服务，指令----核心：模块


# 组件的知识：
## 必备的：
1. 装饰器 @Component()
2. 模板 Template
3. 控制器 Controller
## 可选的
1. 输入属性  @inputs()
2. 提供器    providers
3. 生命周期钩子   LifeCycles Hooks

``` 
  "license": "MIT",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build --prod",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  ```

  ``` javascript
  @NgModule({
  declarations: [   //组件  指令 管道
    AppComponent,
    HomeComponent,
    ProductComponent,
    Code404Component
  ],
  imports: [
    BrowserModule,   //浏览器模块
    AppRoutingModule  //路由模块
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```




