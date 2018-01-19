import { DbPostService } from './theme/db-service/db-post.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IPagination, IPost } from './theme/models/hhd-model';
import { Observable } from 'rxjs/Observable';
export declare class HomeService {
    private _dbPostService;
    constructor(_dbPostService: DbPostService);
    get(appOrPostId: any, skip?: number, take?: number): Observable<IPagination<IPost>>;
}
export declare class HomeResolve implements Resolve<any> {
    private _homeService;
    constructor(_homeService: HomeService);
    resolve(route: ActivatedRouteSnapshot): Observable<IPagination<IPost>>;
}
