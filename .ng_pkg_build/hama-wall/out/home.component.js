/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoDestroy } from './shared/base/auto.destroy';
import { HomeService } from './home.service';
export class HomeComponent extends AutoDestroy {
    /**
     * @param {?} _route
     * @param {?} _homeService
     */
    constructor(_route, _homeService) {
        super();
        this._route = _route;
        this._homeService = _homeService;
        // this.data = this._route.snapshot.data['data'];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._homeService.get(this.postId).subscribe(x => {
            this.data = /** @type {?} */ (x);
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    addItem(item) {
        this.data.result.unshift(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    deleteAction(item) {
        for (let /** @type {?} */ i = 0; i < this.data.result.length; i++) {
            if (this.data.result[i].id === item.id) {
                this.data.result.splice(i, 1);
                break;
            }
        }
    }
    /**
     * @return {?}
     */
    loadMore() {
        this._homeService
            .get(this.postId, this.data.result.length)
            .takeUntil(this._destroy$)
            .subscribe((x) => {
            for (let /** @type {?} */ i = 0; i < x.result.length; i++) {
                this.data.result.push(x.result[i]);
            }
            this.data.totalCount = x.totalCount;
        });
    }
}
HomeComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-home',
                template: `<div class="center">
  <app-post-item (addItem)="addItem($event)" [userId]="userId" [postId]="postId"></app-post-item>
  <app-wall-item (deleteAction)="deleteAction($event)" *ngFor="let item of data.result" [post]="item"></app-wall-item>
  <div class="text-c" *ngIf="data.totalCount > data.result.length">
    <button mat-mini-fab color="accent">
      <mat-icon matTooltip="輸入" (click)="loadMore()">expand_more</mat-icon>
    </button>
  </div>
</div>
<app-navbar></app-navbar>
`,
                styles: [`.center {
  margin: 7% auto 0 auto;
  width: 667px; }

@media screen and (max-width: 1280px) {
  .center {
    margin: 10% auto 0 auto; } }

@media screen and (max-width: 768px) {
  .center {
    margin: 15% auto 0 auto;
    width: 100%; } }

@media screen and (max-width: 666px) {
  .center {
    margin: 30% auto 0 auto;
    width: 100%; } }
`]
            },] },
];
/** @nocollapse */
HomeComponent.ctorParameters = () => [
    { type: ActivatedRoute, },
    { type: HomeService, },
];
HomeComponent.propDecorators = {
    "userId": [{ type: Input },],
    "postId": [{ type: Input },],
};
function HomeComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HomeComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HomeComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    HomeComponent.propDecorators;
    /** @type {?} */
    HomeComponent.prototype.data;
    /** @type {?} */
    HomeComponent.prototype.userId;
    /** @type {?} */
    HomeComponent.prototype.postId;
    /** @type {?} */
    HomeComponent.prototype._route;
    /** @type {?} */
    HomeComponent.prototype._homeService;
}
//# sourceMappingURL=home.component.js.map