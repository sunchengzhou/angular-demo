import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-girlfriend',
  templateUrl: './girlfriend.component.html',
  styleUrls: ['./girlfriend.component.css']
})
export class GirlfriendComponent implements OnInit {
  name:string = "小丽";
  happy:number = 100;
  @Output()
  lastMood: EventEmitter<Mood> = new EventEmitter();

  constructor() { 
    setInterval(()=> {
      let mood:Mood = new Mood(Math.random()*100, this.name);
      this.happy = mood.happy;
      this.lastMood.emit(mood);
    },2000)
  }

  ngOnInit() {
  }

}

export class Mood {
  constructor(
    public happy:number,
    public name:string,
  ) {

  }
} 