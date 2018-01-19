/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { BlockViewModule } from '@hamastar/block-view';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbPostService } from './db-service';
const /** @type {?} */ THEME_DBSERVICE = [
    DbPostService
];
import { AgoTimePipe } from './pipes';
const /** @type {?} */ THEME_PIPES = [
    AgoTimePipe
];
export class ThemeModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return /** @type {?} */ ({
            ngModule: ThemeModule,
            providers: [
                THEME_DBSERVICE
            ]
        });
    }
}
ThemeModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    BlockViewModule
                ],
                declarations: [
                    THEME_PIPES
                ],
                exports: [
                    THEME_PIPES
                ]
            },] },
];
/** @nocollapse */
ThemeModule.ctorParameters = () => [];
function ThemeModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ThemeModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ThemeModule.ctorParameters;
}
//# sourceMappingURL=theme.module.js.map