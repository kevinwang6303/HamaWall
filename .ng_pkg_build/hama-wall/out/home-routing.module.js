/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeResolve } from './home.service';
const ɵ0 = HomeResolve;
const /** @type {?} */ routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: {
            data: ɵ0
        }
    }
];
export class HomeRoutingModule {
}
HomeRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
                providers: [
                    HomeResolve
                ]
            },] },
];
/** @nocollapse */
HomeRoutingModule.ctorParameters = () => [];
function HomeRoutingModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HomeRoutingModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HomeRoutingModule.ctorParameters;
}
export { ɵ0 };
//# sourceMappingURL=home-routing.module.js.map