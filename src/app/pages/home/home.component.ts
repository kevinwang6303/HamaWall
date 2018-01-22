import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { environment } from '../../../environments/environment.prod';
import { AutoDestroy } from '../../shared/base/auto.destroy';
import { IPagination, IPost } from '../../theme/models/hhd-model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends AutoDestroy implements OnInit {

  data: IPagination<IPost>;

  constructor(
    private _route: ActivatedRoute,
    private _homeService: HomeService
  ) {
    super();
    this.data = this._route.snapshot.data['data'];
  }

  ngOnInit() {
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
    this._homeService.get(environment.appOrPostId, this.data.result.length)
      .subscribe((x: IPagination<IPost>) => {
        for (let i = 0; i < x.result.length; i++) {
          this.data.result.push(x.result[i]);
        }
        this.data.totalCount = x.totalCount;
      });
  }
}
