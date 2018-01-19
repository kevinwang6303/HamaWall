/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
import * as moment from 'moment';
export class AgoTimePipe {
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        return moment(value)
            .locale('zh-tw')
            .startOf('hour')
            .fromNow();
    }
}
AgoTimePipe.decorators = [
    { type: Pipe, args: [{
                name: 'agoTime'
            },] },
];
/** @nocollapse */
AgoTimePipe.ctorParameters = () => [];
function AgoTimePipe_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AgoTimePipe.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AgoTimePipe.ctorParameters;
}
//# sourceMappingURL=agoTime.pipe.js.map