import { Component } from '@angular/core';
import { Mood, Random } from './girlfriend/girlfriend.component';
declare var $: any;     //  申明$在ts中的类型

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mood: Mood = new Mood(50, '小花花');
  public randoms:Random = new Random(0);
  ngOnInit() {

  }
  constructor(){}
  moodHandler(event:Mood) {
    this.mood = event;
  }
  randHandle(event:Random){
    this.randoms = event;
  }
}
