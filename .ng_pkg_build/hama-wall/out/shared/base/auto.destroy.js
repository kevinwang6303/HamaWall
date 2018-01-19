/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Subject } from 'rxjs/Subject';
/**
 * @abstract
 */
export class AutoDestroy {
    constructor() {
        this._destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
}
function AutoDestroy_tsickle_Closure_declarations() {
    /** @type {?} */
    AutoDestroy.prototype._destroy$;
}
//# sourceMappingURL=auto.destroy.js.map