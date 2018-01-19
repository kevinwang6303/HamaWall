import { IPostInfo, IFilesArray } from '../post-item/post-item.service';
import { DbPostService } from '../theme/db-service/db-post.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WallItemService {
  constructor(private _dbPostService: DbPostService) {}

  deleteItem(id: string) {
    return this._dbPostService.delete(id);
  }

  replyItem(files: IFilesArray[], info: IPostInfo) {
    return this._dbPostService.createFunction(files, info);
  }
}
