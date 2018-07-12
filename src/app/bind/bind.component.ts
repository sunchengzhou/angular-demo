import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  private imgUrl:string = "../../assets/muke.jpg";
  constructor() { }

  ngOnInit() {
  }
  clickHand(event: any) {
    console.log(event)
  }
  doOnInput(event:any) {
    // dom属性
    console.log(event.target.value)
    // html属性
    console.log(event.target.getAttribute('value'))
  }
}
