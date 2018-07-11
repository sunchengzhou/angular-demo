import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  private cateId:number;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.cateId = this.routeInfo.snapshot.params["id"];
  }

}
