import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Code404Component } from './code404/code404.component'
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'product/:prodTitle', component: ProductDetailComponent},
  {path:'**', component: Code404Component}
];

@NgModule({
  //  注入路由配置
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
