/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { AutoDestroy } from '../base/auto.destroy';
import { Directive, Input, ElementRef } from '@angular/core';
import { EventService } from '../service/event.service';
export class FixedMenuDirective extends AutoDestroy {
    /**
     * @param {?} _elem
     * @param {?} _EventService
     */
    constructor(_elem, _EventService) {
        super();
        this._elem = _elem;
        this._EventService = _EventService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._EventService.scrollEvent
            .takeUntil(this._destroy$)
            .map(e => this.conditions())
            .subscribe(bool => {
            if (bool) {
                this._elem.nativeElement.classList.add(this.appFixedMenu);
            }
            else {
                this._elem.nativeElement.classList.remove(this.appFixedMenu);
            }
        });
    }
    /**
     * @return {?}
     */
    conditions() {
        switch (this.howFixed) {
            case 'scroll':
                return this._elem.nativeElement.parentElement.getBoundingClientRect().top < 0;
            case 'top':
                return window.scrollY > 0;
        }
    }
}
FixedMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appFixedMenu]'
            },] },
];
/** @nocollapse */
FixedMenuDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: EventService, },
];
FixedMenuDirective.propDecorators = {
    "appFixedMenu": [{ type: Input },],
    "howFixed": [{ type: Input },],
};
function FixedMenuDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FixedMenuDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FixedMenuDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FixedMenuDirective.propDecorators;
    /** @type {?} */
    FixedMenuDirective.prototype.appFixedMenu;
    /** @type {?} */
    FixedMenuDirective.prototype.howFixed;
    /** @type {?} */
    FixedMenuDirective.prototype._elem;
    /** @type {?} */
    FixedMenuDirective.prototype._EventService;
}
//# sourceMappingURL=fixed-menu.directive.js.map