import { DbPostService } from '../../theme/db-service/db-post.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class HomeService {

  constructor(
    private _dbPostService: DbPostService
  ) { }

  get(appOrPostId = environment.appOrPostId, skip = 0, take = 10) {
    return this._dbPostService.get(appOrPostId, skip, take);
  }

}

@Injectable()
export class HomeResolve implements Resolve<any> {

  constructor(
    private _homeService: HomeService
  ) { }

  resolve() {
    return this._homeService.get();
  }
}
