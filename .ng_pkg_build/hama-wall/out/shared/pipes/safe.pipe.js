/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class SafePipe {
    /**
     * @param {?} _sanitizer
     */
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * @param {?} value
     * @param {?=} type
     * @return {?}
     */
    transform(value, type = 'html') {
        switch (type) {
            case 'html': return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'background-image': return this._sanitizer.bypassSecurityTrustStyle(`url('${value}')`);
            case 'youtu-background-image':
                const /** @type {?} */ url = value.split('/');
                return this._sanitizer.bypassSecurityTrustStyle(`url('https://i.ytimg.com/vi/${url[url.length - 1]}/hqdefault.jpg')`); // https://i.ytimg.com/vi/HSOtku1j600/hqdefault.jpg
            case 'script': return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}
SafePipe.decorators = [
    { type: Pipe, args: [{
                name: 'safe'
            },] },
];
/** @nocollapse */
SafePipe.ctorParameters = () => [
    { type: DomSanitizer, },
];
function SafePipe_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SafePipe.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SafePipe.ctorParameters;
    /** @type {?} */
    SafePipe.prototype._sanitizer;
}
//# sourceMappingURL=safe.pipe.js.map