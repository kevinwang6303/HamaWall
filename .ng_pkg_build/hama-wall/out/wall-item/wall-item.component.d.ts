import { OnInit, EventEmitter, ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { IPost } from '../theme/models/hhd-model';
import { WallItemService } from './wall-item.service';
import { AutoDestroy } from '../shared/base/auto.destroy';
export declare class WallItemComponent extends AutoDestroy implements OnInit, AfterViewInit {
    private _wallItemService;
    post: IPost;
    deleteAction: EventEmitter<{}>;
    textContent: string;
    articleList: QueryList<ElementRef>;
    constructor(_wallItemService: WallItemService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private onResize(event);
    deleteItem(): void;
    reply(): void;
    getHeight(): void;
}
