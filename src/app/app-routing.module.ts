import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Code404Component } from './code404/code404.component';
import { CategoryComponent } from './category/category.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ProductDscComponent } from './product-dsc/product-dsc.component';
import { ChatComponent } from './chat/chat.component';
import { LoginGuard } from './guard/login.guard';
import { UnsavedGuard } from './guard/unsaved.guard';

const routes: Routes = [
  // 这里不用/,支持相对、绝对路径
  // 路由守卫：对应的数组中的值为true,false
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent, outlet:"aux" },
  {path:'product', component: ProductComponent,children:[
    { path: '', component: ProductDscComponent },
    { path: 'seller/:id', component: SellerInfoComponent },
  ], canActivate: [LoginGuard], canDeactivate: [UnsavedGuard]
  },
  {path:'category/:id', component: CategoryComponent},
  //  通配符路由放到最后面
  {path:'**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard,UnsavedGuard]
})
export class AppRoutingModule { }
