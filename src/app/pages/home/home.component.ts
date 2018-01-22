import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AutoDestroy } from './shared/base/auto.destroy';
import { IPagination, IPost } from './theme/models/hhd-model';
import { HomeService } from './home.service';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'hm-hamawall',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends AutoDestroy implements OnInit {
  data: IPagination<IPost>;

  @Input() userId: string;
  @Input() postId: string;

  constructor(
    private _route: ActivatedRoute,
    private _homeService: HomeService
  ) {
    super();
    // this.data = this._route.snapshot.data['data'];
  }

  ngOnInit() {
    this._homeService.get(this.postId).subscribe(x => {
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
      .get(this.postId, this.data.result.length)
      .subscribe((x: IPagination<IPost>) => {
        for (let i = 0; i < x.result.length; i++) {
          this.data.result.push(x.result[i]);
        }
        this.data.totalCount = x.totalCount;
      });
  }
}
