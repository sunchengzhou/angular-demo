import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input()
  showStock:string;

  @Input()
  moodValue:string;
  @Input()
  randomValue:number;
  constructor() { }

  ngOnInit() {
  }

}
