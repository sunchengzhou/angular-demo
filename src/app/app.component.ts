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
