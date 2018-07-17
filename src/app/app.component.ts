import { Component } from '@angular/core';
import { Mood } from './girlfriend/girlfriend.component';
declare var $: any;     //  申明$在ts中的类型

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mood: Mood = new Mood(50, '小花花');
  ngOnInit() {

  }
  constructor(){}
  moodHandler(event:Mood) {
    this.mood = event;
  }
}
