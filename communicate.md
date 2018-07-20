# 组件通讯

## 组件输入输出

``` typescript
  @Input()
  showStock:string;

  @Output()
  lastMood: EventEmitter<Mood> = new EventEmitter();
  // 父组件中检测emit
  // 暴露：
  <app-girlfriend (lastMood)="moodHandler($event)" (outNum)="randHandle($event)"></app-girlfriend>
  // 接收：
  moodHandler(event:Mood) {
    this.mood = event;
  }

```

## 使用中间人模式

> 父组件或者一个服务作为传递媒介

## 组件生命周期和变化发现机制

> 这个顺序是按照执行的先后排列的

| 生命周期 | 对应功能 | 
| :------| :------: |
constructor | 构造器函数，一般用于注入服务,该周期并不能检测到输入的属性
ngOnChanges | 检测到输入数据变化，首次触发发生在ngOnInit前。注意对象的属性发生变化时监听不到
ngOnInit | 组件初始化，通常会设置一些初始值
ngDoCheck | 手动触发更新检查，input，button等点击，输入都会触发。并且会由子组件传递到父组件，慎用
ngAfterContentInit | 内容初始化到组件之后
ngAfterContentChecked | 内容变更检测之后
ngAfterViewInit | 视图 初始化之后
ngAfterViewChecked | 视图发生变化检测之后，这个可以用来保证用户视图的及时更新
ngOnDestroy | 组件注销时的清理工作，通常用于移除事件监听，退订可观察对象等




