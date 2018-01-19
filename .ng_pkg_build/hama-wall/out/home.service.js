/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DbPostService } from './theme/db-service/db-post.service';
import { Injectable } from '@angular/core';
export class HomeService {
    /**
     * @param {?} _dbPostService
     */
    constructor(_dbPostService) {
        this._dbPostService = _dbPostService;
    }
    /**
     * @param {?} appOrPostId
     * @param {?=} skip
     * @param {?=} take
     * @return {?}
     */
    get(appOrPostId, skip = 0, take = 10) {
        return this._dbPostService.get(appOrPostId, skip, take);
    }
}
HomeService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
HomeService.ctorParameters = () => [
    { type: DbPostService, },
];
function HomeService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HomeService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HomeService.ctorParameters;
    /** @type {?} */
    HomeService.prototype._dbPostService;
}
export class HomeResolve {
    /**
     * @param {?} _homeService
     */
    constructor(_homeService) {
        this._homeService = _homeService;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    resolve(route) {
        return this._homeService.get(null);
    }
}
HomeResolve.decorators = [
    { type: Injectable },
];
/** @nocollapse */
HomeResolve.ctorParameters = () => [
    { type: HomeService, },
];
function HomeResolve_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HomeResolve.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HomeResolve.ctorParameters;
    /** @type {?} */
    HomeResolve.prototype._homeService;
}
//# sourceMappingURL=home.service.js.map