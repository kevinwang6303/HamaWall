/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DbPostService } from '../theme/db-service/db-post.service';
import { Injectable } from '@angular/core';
export class WallItemService {
    /**
     * @param {?} _dbPostService
     */
    constructor(_dbPostService) {
        this._dbPostService = _dbPostService;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deleteItem(id) {
        return this._dbPostService.delete(id);
    }
    /**
     * @param {?} files
     * @param {?} info
     * @return {?}
     */
    replyItem(files, info) {
        return this._dbPostService.createFunction(files, info);
    }
}
WallItemService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
WallItemService.ctorParameters = () => [
    { type: DbPostService, },
];
function WallItemService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    WallItemService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    WallItemService.ctorParameters;
    /** @type {?} */
    WallItemService.prototype._dbPostService;
}
//# sourceMappingURL=wall-item.service.js.map