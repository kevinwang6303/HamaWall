import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPagination, IPost } from './theme/models/hhd-model';
import { HomeService } from './home.service';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'hm-hamawall',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {
  data: IPagination<IPost>;

  @Input() userId: string;
  @Input() fileId: string;

  constructor(
    private _route: ActivatedRoute,
    private _homeService: HomeService
  ) {
  }

  ngOnInit() {
    this._homeService.get(this.fileId).subscribe(x => {
      this.data = x as IPagination<IPost>;
    });
  }

  addItem(item: IPost) {
    this.data.result.unshift(item);
  }

  deleteAction(item: IPost) {
    for (let i = 0; i < this.data.result.length; i++) {
      if (this.data.result[i].id === item.id) {
        this.data.result.splice(i, 1);
        break;
      }
    }
  }

  loadMore() {
    this._homeService
      .get(this.fileId, this.data.result.length)
      .subscribe((x: IPagination<IPost>) => {
        for (let i = 0; i < x.result.length; i++) {
          this.data.result.push(x.result[i]);
        }
        this.data.totalCount = x.totalCount;
      });
  }
}
