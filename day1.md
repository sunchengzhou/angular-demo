# angular程序架构

> 组件，服务，指令----核心：模块
> @angular/cli 组件
> 指令如下：
> ng version
> ng new ProjectName
> ng g c 组件

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
### 方法1：配置文件路径中写入
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
        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
```
3. 类型支持适配
> ts中申明$字符的类型
``` javascript
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
#### 方法2：把jquery.js bootstrap.js等放入assets文件夹
> 把jquery.js bootstrap.js等放入assets文件夹,且在页面中 <src="assets/jquery.min.js">,这样webpack打包时会打包到对应的js文件中




