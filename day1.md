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

## 引入jquery *Bootstrap*:
1. 包的引入：
```
npm install jquery bootstrap --save
// 引入ts对jquery，bootstrap支持
// 注意引入对应版本
npm install @types/jquery @types/bootstrap --save-dev
```
2. 配置目录文件.angular-cli.json
> cnpm下文件路径不与npm相同，对应的文件引入方式
```
      "styles": [
        "styles.css",
        "../node_modules/_bootstrap@3.3.7@bootstrap/dist/css/bootstrap.min.css"
      ],
      "scripts": [
        "../node_modules/_jquery@3.3.1@jquery/dist/jquery.min.js",
        "../node_modules/_bootstrap@3.3.7@bootstrap/dist/js/bootstrap.min.js"
      ],
```
> npm下引入方式
```
      "styles": [
        "styles.css",
        "../node_modules/_bootstrap@3.3.7@bootstrap/dist/css/bootstrap.min.css"
      ],
```
3. 类型支持适配
``` 
import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;     //  申明$在ts中的类型

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ngOnInit(): void {
    $(() => {
      $('#test').click(() => {
        alert('test');
      });
    });
  }
  constructor(private router:Router){

  }

  toProductDetail() {
    this.router.navigate(['/product'])
  }
}
```




