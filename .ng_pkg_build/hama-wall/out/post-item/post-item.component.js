/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { PostItemService } from './post-item.service';
import swal from 'sweetalert2';
import { AutoDestroy } from '@hamastar/auto-destroy';
import { BlockViewService } from '@hamastar/block-view';
export class PostItemComponent extends AutoDestroy {
    /**
     * @param {?} _postItemService
     * @param {?} _blockViewService
     */
    constructor(_postItemService, _blockViewService) {
        super();
        this._postItemService = _postItemService;
        this._blockViewService = _blockViewService;
        // 發文頁面用到的今天日期
        this.today = new Date();
        // 欲上傳的array
        this.filesArray = [];
        this.addItem = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} item
     * @return {?}
     */
    choiceItem(item) {
        item.choice = !item.choice;
    }
    /**
     * @param {?} files
     * @return {?}
     */
    uploadFile(files) {
        // 限制max 10個檔案上傳
        if (this.filesArray.length === 10 ||
            this.filesArray.length + files.length > 10) {
            swal({
                title: '警告!',
                text: '最多只能上傳10個檔案',
                type: 'warning'
            });
            return;
        }
        // 去service邏輯處理
        this.filesArray = this._postItemService.uploadFunction(files, this.filesArray);
    }
    /**
     * @return {?}
     */
    remove() {
        // 去service邏輯處理
        this.filesArray = this._postItemService.removeFunction(this.filesArray);
    }
    /**
     * @return {?}
     */
    shared() {
        // 因為沒有經過base，所以要自己呼叫block起來
        this._blockViewService.block();
        // 塞好要新增的資訊
        const /** @type {?} */ info = {
            postId: this.postId,
            userId: this.userId,
            content: this.textContent
        };
        this._postItemService
            .uplaodFiles(this.filesArray, info)
            .takeUntil(this._destroy$)
            .subscribe((x) => {
            if (x.data) {
                // 讓外面知道發文了
                this.addItem.emit(x.data);
                // 把照片清掉
                this.filesArray = this._postItemService.removeFunction(this.filesArray, true);
                // 嚴謹一點把array變0
                this.filesArray.length = 0;
                this.textContent = '';
                this._blockViewService.unblock();
            }
        }, error => {
            this._blockViewService.unblock();
            swal({
                title: '錯誤訊息!!!',
                text: '伺服器發生錯誤，請聯絡管理者!',
                type: 'error'
            });
        });
    }
}
PostItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-post-item',
                template: `<div class="post-item">
  <header class="header" fxLayoutAlign="space-around center">
    <section fxLayout="column" fxLayoutAlign="center">
      <h3>
        分享你的生活吧
      </h3>
      <p>{{ today | date:'yyyy/MM/dd' }}</p>
    </section>
    <img class="avatar" src="assets/images/evan.jpg" alt="">
  </header>
  <section class="content" fxLayoutAlign="center">
    <textarea class="reply-input" placeholder="kevinwang6303，你在想些什麼呢!" [(ngModel)]="textContent"></textarea>
  </section>
  <section class="content-img">
    <img [ngClass]="{'active':item.choice}" (click)="choiceItem(item)" class="img" [src]="item.blob | safe:'resourceUrl'" alt=""
      *ngFor="let item of filesArray">
  </section>
  <footer fxLayoutAlign="space-between">
    <div>
      <button mat-raised-button color="accent" (click)="tempFiles.click()">
        <input #tempFiles type="file" class="none" (ngxf-select)="uploadFile($event)" accept="image/*,.svg" multiple/> 上傳圖片
      </button>
      <button mat-raised-button color="warn" (click)="remove()">刪除選擇</button>
    </div>
    <button mat-raised-button color="primary" (click)="shared()">分享
    </button>
  </footer>
</div>
`,
                styles: [`.post-item {
  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
          box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background: white;
  margin-bottom: 2em; }
  .post-item .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%; }
  .post-item .content {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    padding-bottom: 0.3em; }
    .post-item .content .reply-input {
      width: 90%;
      border: 1px solid rgba(0, 0, 0, 0.08);
      outline: none;
      max-width: 90%;
      resize: none;
      height: 4em; }
  .post-item .content-img {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08); }
    .post-item .content-img .img {
      opacity: .5;
      margin: .3em;
      width: 100px;
      height: 100px;
      cursor: pointer; }
      .post-item .content-img .img:hover {
        opacity: 1; }
      .post-item .content-img .img.active {
        border: 2px solid red;
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        opacity: 1; }

@media screen and (max-width: 666px) {
  .post-item .content-img .img {
    margin: .7em; } }
`]
            },] },
];
/** @nocollapse */
PostItemComponent.ctorParameters = () => [
    { type: PostItemService, },
    { type: BlockViewService, },
];
PostItemComponent.propDecorators = {
    "postId": [{ type: Input },],
    "userId": [{ type: Input },],
    "addItem": [{ type: Output },],
};
function PostItemComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PostItemComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PostItemComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    PostItemComponent.propDecorators;
    /** @type {?} */
    PostItemComponent.prototype.today;
    /** @type {?} */
    PostItemComponent.prototype.filesArray;
    /** @type {?} */
    PostItemComponent.prototype.textContent;
    /** @type {?} */
    PostItemComponent.prototype.postId;
    /** @type {?} */
    PostItemComponent.prototype.userId;
    /** @type {?} */
    PostItemComponent.prototype.addItem;
    /** @type {?} */
    PostItemComponent.prototype._postItemService;
    /** @type {?} */
    PostItemComponent.prototype._blockViewService;
}
//# sourceMappingURL=post-item.component.js.map