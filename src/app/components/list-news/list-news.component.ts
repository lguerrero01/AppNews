import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {
  public p: number = 1;
  @Input() listNews: any;

  constructor() { }

  ngOnInit(): void {
  }

}
