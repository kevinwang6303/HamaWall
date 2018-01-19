/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concatAll';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/throw';
export class EventService {
    constructor() {
        this.scrollEvent = Observable.fromEvent(document, 'scroll');
        this.mouseMove = Observable.fromEvent(document, 'mousemove');
        this.touchMove = Observable.fromEvent(document, 'touchmove');
        this.keydownEvent_Exit = Observable.fromEvent(document, 'keydown').filter((event) => {
            return event.keyCode === 27;
        });
    }
}
EventService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
EventService.ctorParameters = () => [];
function EventService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    EventService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    EventService.ctorParameters;
    /** @type {?} */
    EventService.prototype.scrollEvent;
    /** @type {?} */
    EventService.prototype.mouseMove;
    /** @type {?} */
    EventService.prototype.touchMove;
    /** @type {?} */
    EventService.prototype.keydownEvent_Exit;
}
//# sourceMappingURL=event.service.js.map