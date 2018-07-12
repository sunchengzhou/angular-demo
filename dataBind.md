# 数据绑定

## 使用插值表达式显示在模板上

```
<h1> {{productTitle}}</h1>
```

## 使用方括号将HTML标签上属性绑定到表达式

```
<img [src]="imgUrl">
```

## 使用小括号将组件控制器的方法绑定到模板的事件处理器上

```
<button (click)="toProductDetail()">商品详情</button>
```

# 事件绑定

> input事件可以为原事件或绑定事件，$event.target为原生DOM对象

> 可以执行方法或给属性赋值

```
<input (input)="onInputEvent($event)" />
```

```
<button (click)="saved= true">商品详情</button>
```

## HTML属性和DOM属性的关系
1. 少量html属性映射dom属性，id
2. 有html属性，没有dom属性，colspan
3. 有dom，没有html ， textContent
4. html属性  不等于 Dom属性
5. html是初始值，不能改变；Dom是动态值，可以改变
6. angular是依赖DOM属性进行工作的

