import { OnInit, EventEmitter } from '@angular/core';
import { PostItemService, IFilesArray } from './post-item.service';
import { AutoDestroy } from '@hamastar/auto-destroy';
import { BlockViewService } from '@hamastar/block-view';
export declare class PostItemComponent extends AutoDestroy implements OnInit {
    private _postItemService;
    private _blockViewService;
    today: Date;
    filesArray: IFilesArray[];
    textContent: string;
    postId: string;
    userId: string;
    addItem: EventEmitter<{}>;
    constructor(_postItemService: PostItemService, _blockViewService: BlockViewService);
    ngOnInit(): void;
    choiceItem(item: any): void;
    uploadFile(files: File[]): void;
    remove(): void;
    shared(): void;
}
