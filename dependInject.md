# angular依赖注入

> 坑点：@angular/cli 1.2.1版本，请使用低版本的脚手架工具，创建ng g service xxx;

> 坑点：然而发现还是有坑，引入的路径依赖会被更改，猜测是版本不匹配导致的，最后手动写依赖的服务

> 注意点：组件单独的依赖 如：providers: [{ provide: ProductService, useClass: AnotherProductService }],
  放到@Componet中即可，不用重新起@Ngmodule装饰器

## 依赖注入

### 注入器

+ constructor(private productService: ProductService) { ... }

### 提供器

+ 正常写法：         providers:[ProductService]

+ 等价写法：         providers:[{ provide:ProductService, useClass: ProductService}]

+ 引入一个继承服务：  providers:[{ provide:ProductService, useClass: ProductService}]

+ 工厂模式抛出：  providers:[{ provide:ProductService, useFactory: () => { ... }}]

## 服务中装饰器可以注入别的服务

> @Injectable() 建议所有的服务都加上这个装饰器

> @Component()  是@Injectable()装饰器的子类，所以可以注入别的东西