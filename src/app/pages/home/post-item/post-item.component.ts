import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  today = new Date();

  array = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.array.push({
        id: i,
        choice: false
      });
    }
  }

  choiceItem(item) {
    item.choice = !item.choice;
  }

}
