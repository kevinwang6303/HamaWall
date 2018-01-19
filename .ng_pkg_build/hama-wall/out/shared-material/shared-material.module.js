/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MatIconModule, MatButtonModule, MatButtonToggleModule, MatRippleModule, MatSidenavModule, MatToolbarModule, MatListModule, MatMenuModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatDatepickerModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS, MatSelectModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule, MatSliderModule, MatGridListModule, MatCardModule, MatProgressBarModule, MatProgressSpinnerModule, MatDialogModule, MatChipsModule, MatTooltipModule, MatSnackBarModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
export const /** @type {?} */ TW_FORMATS = {
    parse: {
        dateInput: 'YYYY/MM/DD'
    },
    display: {
        dateInput: 'YYYY/MM/DD',
        monthYearLabel: 'YYYY MMM',
        dateA11yLabel: 'YYYY/MM/DD',
        monthYearA11yLabel: 'YYYY MMM'
    }
};
export class SharedMaterialModule {
}
SharedMaterialModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    MatButtonModule,
                    MatIconModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatRippleModule,
                    MatSidenavModule,
                    MatToolbarModule,
                    MatListModule,
                    MatMenuModule,
                    MatStepperModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatAutocompleteModule,
                    MatDatepickerModule,
                    MatMomentDateModule,
                    MatSelectModule,
                    MatCheckboxModule,
                    MatRadioModule,
                    MatSlideToggleModule,
                    MatSliderModule,
                    MatGridListModule,
                    MatCardModule,
                    MatProgressBarModule,
                    MatProgressSpinnerModule,
                    MatDialogModule,
                    MatChipsModule,
                    MatTooltipModule,
                    MatSnackBarModule
                ],
                providers: [
                    { provide: MAT_DATE_LOCALE, useValue: 'zh-TW' },
                    { provide: MAT_DATE_FORMATS, useValue: TW_FORMATS }
                ]
            },] },
];
/** @nocollapse */
SharedMaterialModule.ctorParameters = () => [];
function SharedMaterialModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SharedMaterialModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SharedMaterialModule.ctorParameters;
}
//# sourceMappingURL=shared-material.module.js.map