import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Code404Component } from './code404/code404.component'

const routes: Routes = [
  // 这里不用/,支持相对、绝对路径
  {path:'', component: HomeComponent},
  {path:'product', component: ProductComponent},
  //  通配符路由放到最后面
  {path:'**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
