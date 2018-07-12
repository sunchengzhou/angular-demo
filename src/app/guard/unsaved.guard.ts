import { CanDeactivate } from "../../../node_modules/@angular/router";
import { ProductComponent } from "../product/product.component";

export class UnsavedGuard implements CanDeactivate<ProductComponent>{
  canDeactivate(component: ProductComponent) {
    return window.confirm('您真的确定离开吗？');
  }
}