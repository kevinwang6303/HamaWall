/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostListener, QueryList, ViewChildren } from '@angular/core';
import { WallItemService } from './wall-item.service';
import { AutoDestroy } from '../shared/base/auto.destroy';
export class WallItemComponent extends AutoDestroy {
    /**
     * @param {?} _wallItemService
     */
    constructor(_wallItemService) {
        super();
        this._wallItemService = _wallItemService;
        // 刪除玩要傳出去的output
        this.deleteAction = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.getHeight();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.getHeight();
    }
    /**
     * @return {?}
     */
    deleteItem() {
        this._wallItemService
            .deleteItem(this.post.id)
            .takeUntil(this._destroy$)
            .subscribe(x => {
            this.deleteAction.emit(this.post);
        });
    }
    /**
     * @return {?}
     */
    reply() {
        // 塞好要新增的資訊
        const /** @type {?} */ info = {
            postId: this.post.id,
            userId: 'kevinwang6303',
            content: this.textContent
        };
        this._wallItemService
            .replyItem([], info)
            .takeUntil(this._destroy$)
            .subscribe((data) => {
            this.post.reply.push(data);
            this.textContent = '';
        });
    }
    /**
     * @return {?}
     */
    getHeight() {
        this.articleList.forEach(x => {
            // set height
            x.nativeElement.style.height = x.nativeElement.style.width;
        });
    }
}
WallItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-wall-item',
                template: `<mat-card class="card">
  <mat-card-header>
    <mat-card-title>{{ post.userId }}</mat-card-title>
    <mat-card-subtitle>{{ post.time | date:'yyyy/MM/dd' }}</mat-card-subtitle>
    <img mat-card-avatar src="assets/images/evan.jpg" />
    <button mat-icon-button class="card-action" [matMenuTriggerFor]="menu">
      <mat-icon>more_vert</mat-icon>
    </button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item (click)="deleteItem()">刪除</button>
    </mat-menu>
  </mat-card-header>

  <img *ngIf="post.files.length === 1" mat-card-image [src]="'http://localhost:50696/' + post.files[0].url"/>

  <carousel-container *ngIf="post.files.length > 1">

    <section carousel-items-container class="pane-container">

      <article class="pane" *ngFor="let avatar of post.files; let i = index;"
      carousel-item
      #articleList
      [style.backgroundImage]="('http://localhost:50696/' + avatar.url) | safe:'background-image'"
      >
      </article>

      <!-- <img carousel-item class="magin-size" mat-card-image *ngFor="let item of post.files" [src]="'http://localhost:50696/' + item.url"
      /> -->

    </section>

    <ng-template #carouselPrev>
      <mat-icon class="icon">keyboard_arrow_left</mat-icon>
    </ng-template>

    <ng-template #carouselNext>
      <mat-icon class="icon">keyboard_arrow_right</mat-icon>
    </ng-template>

    <ng-template #carouselDot let-model>
      <div class="ball" [class.visible]="model.index === model.currentIndex"></div>
    </ng-template>

  </carousel-container>

  <div>
    <mat-icon class="cursor-pointer  magin-right1em">favorite_border</mat-icon>
    <mat-icon class="cursor-pointer">chat_bubble_outline</mat-icon>
  </div>
  <mat-card-content class="content">
    <p class="reply">
      <strong>{{ post.userId }}：</strong>
      <span>{{ post.content }}</span>
    </p>
    <p class="reply" *ngFor="let item of post.reply">
      <strong>{{ item.userId }}：</strong>
      <span>{{ item.content }}</span>
    </p>
    <p class="load-more">{{ post.time | agoTime }}</p>
    <!-- <p class="load-more">載入更多留言</p> -->
  </mat-card-content>

  <mat-card-footer class="footer" fxLayoutAlign="center">
    <textarea class="reply-input" placeholder="留言........" [(ngModel)]="textContent"></textarea>
    <button mat-icon-button color="primary" (click)="reply()">
      <mat-icon>send</mat-icon>
    </button>
  </mat-card-footer>
</mat-card>
`,
                styles: [`.card {
  margin-bottom: 2em; }
  .card .card-action {
    position: absolute;
    right: 0;
    margin-right: 2em; }
  .card .magin-right1em {
    margin-right: 1em; }
  .card .load-more {
    cursor: pointer;
    color: #999; }
  .card .content p {
    margin-bottom: .5em; }
  .card .footer {
    padding-bottom: .2em; }
    .card .footer .reply-input {
      width: 85%;
      border: none;
      outline: none;
      max-width: 90%;
      resize: none;
      height: 3em; }

.ball {
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background: #efefef; }
  .ball.visible {
    background: #3d7df7; }

.pane-container {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  line-height: 0; }
  .pane-container .magin-size {
    margin: 0 0 16px 0; }
  .pane-container .pane {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    width: 100%;
    background-attachment: scroll;
    background-size: 100% 100%;
    background-position: center; }

.pane-container.transition {
  -webkit-transition: left .4s ease-in-out;
  transition: left .4s ease-in-out; }

.icon {
  font-size: 3em;
  color: #cccccc;
  padding-right: 1rem;
  cursor: pointer; }

@media (max-width: 600px) {
  .pane {
    width: calc(100% + 32px);
    margin: 16px 0; } }
`]
            },] },
];
/** @nocollapse */
WallItemComponent.ctorParameters = () => [
    { type: WallItemService, },
];
WallItemComponent.propDecorators = {
    "post": [{ type: Input },],
    "deleteAction": [{ type: Output },],
    "articleList": [{ type: ViewChildren, args: ['articleList',] },],
    "onResize": [{ type: HostListener, args: ['window:resize', ['$event'],] },],
};
function WallItemComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    WallItemComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    WallItemComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    WallItemComponent.propDecorators;
    /** @type {?} */
    WallItemComponent.prototype.post;
    /** @type {?} */
    WallItemComponent.prototype.deleteAction;
    /** @type {?} */
    WallItemComponent.prototype.textContent;
    /** @type {?} */
    WallItemComponent.prototype.articleList;
    /** @type {?} */
    WallItemComponent.prototype._wallItemService;
}
//# sourceMappingURL=wall-item.component.js.map