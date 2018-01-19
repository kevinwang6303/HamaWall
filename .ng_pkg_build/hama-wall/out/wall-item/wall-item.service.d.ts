import { IPostInfo, IFilesArray } from '../post-item/post-item.service';
import { DbPostService } from '../theme/db-service/db-post.service';
import { Observable } from 'rxjs/Observable';
export declare class WallItemService {
    private _dbPostService;
    constructor(_dbPostService: DbPostService);
    deleteItem(id: string): Observable<void>;
    replyItem(files: IFilesArray[], info: IPostInfo): Observable<any>;
}
