import { CanActivate } from "../../../node_modules/@angular/router";

export class LoginGuard implements CanActivate{
  canActivate() {
    let loggedIn: boolean = Math.random() < 0.5;
    if(!loggedIn) {
      console.log('用户未登录')
    }else {
      console.log('用户已登录')
    }
    return loggedIn;
  }
}