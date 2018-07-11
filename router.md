# angular Route导航

| 名称 | 简介 |
| - | :---: |
| Routes | 路由的配置信息|
| RouterOutlet | 路由的展示容器 |
| Router | 路由执行对象，可以用其navigate(),navigateByUrl()跳转指定路由 |
| RouterLink | html中与a标签配合的跳转 |
| ActivatedRoute | 激活的路由对象，保存了路由地址，路由参数等 |

## 路由时传递参数

| 方式 | 写法 |
| - | :---: |
| 在查询参数中传递参数 | /product?id=1&name=2 => ActivatedRoute.queryParams[id] |
| 在路由路径传递参数 | {path:/product/:id} =>/product/1 => ActivatedRoute.params[id] |
| 在路由配置传递参数 | {path:/product,component:ProductComponent,data:[{isProd:true}]} => ActivatedRoute.data[0][isProd] |

## 路由重定向
``` javascript
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
```





