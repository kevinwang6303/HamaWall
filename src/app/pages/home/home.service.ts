import { DbPostService } from './theme/db-service/db-post.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IPagination, IPost } from './theme/models/hhd-model';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class HomeService {
  constructor(private _dbPostService: DbPostService) {}

  get(appOrPostId, skip = 0, take = 10) {
    return this._dbPostService.get(appOrPostId, skip, take);
  }
}

@Injectable()
export class HomeResolve implements Resolve<any> {
  constructor(private _homeService: HomeService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this._homeService.get(null);
  }
}
