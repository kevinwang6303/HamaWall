import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoDestroy } from './shared/base/auto.destroy';
import { IPagination, IPost } from './theme/models/hhd-model';
import { HomeService } from './home.service';
export declare class HomeComponent extends AutoDestroy implements OnInit {
    private _route;
    private _homeService;
    data: IPagination<IPost>;
    userId: string;
    postId: string;
    constructor(_route: ActivatedRoute, _homeService: HomeService);
    ngOnInit(): void;
    addItem(item: IPost): void;
    deleteAction(item: IPost): void;
    loadMore(): void;
}
