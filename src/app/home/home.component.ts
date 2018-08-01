import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormArray } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myGroup: FormGroup = new FormGroup({
    dateRange: new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }),
    emails:new FormArray([
      new FormControl('@163.com'),
      new FormControl('@qq.com')
    ])
  })

  constructor() {

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myGroup.value)
  }
  addEmail() {
    let emails = this.myGroup.get('emails') as FormArray;
    emails.push(new FormControl());
  }
}
