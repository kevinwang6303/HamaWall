import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DbPostService } from '../../shared/db-service/db-post.service';

@Injectable()
export class HomeService {

  constructor() { }

}

@Injectable()
export class HomeResolve implements Resolve<any> {

  constructor(private _dbPostService: DbPostService) { }

  resolve() {
    return this._dbPostService.get();
  }
}
