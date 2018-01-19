/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedMenuDirective } from './directive';
import { EventService } from './service';
import { SafePipe } from './pipes';
const /** @type {?} */ SHARE_DIRECTIVES = [
    FixedMenuDirective
];
const /** @type {?} */ SHARE_PIPES = [
    SafePipe
];
export class SharedModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return /** @type {?} */ ({
            ngModule: SharedModule,
            providers: [
                EventService
            ]
        });
    }
}
SharedModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SHARE_DIRECTIVES,
                    SHARE_PIPES
                ],
                exports: [
                    SHARE_DIRECTIVES,
                    SHARE_PIPES
                ]
            },] },
];
/** @nocollapse */
SharedModule.ctorParameters = () => [];
function SharedModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SharedModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SharedModule.ctorParameters;
}
//# sourceMappingURL=shared.module.js.map