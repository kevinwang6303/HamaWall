/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
export class NavbarComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-navbar',
                template: `<nav class="navbar" fxLayoutAlign="center center" [appFixedMenu]="'fixed'" [howFixed]="'top'">
  <div class="block" fxLayoutAlign="space-between center">
    <a class="logo" fxLayoutAlign="center center">
      <mat-icon class="interval">forum</mat-icon>
      <span class="text">HamaWall</span>
    </a>
    <div fxLayoutAlign="space-around center" class="search">
      <mat-icon>search</mat-icon>
      <input type="text" class="text" placeholder="搜尋">
    </div>
    <div class="menu-icon" fxLayout fxLayoutGap="1em">
      <mat-icon class="cursor-pointer">favorite_border</mat-icon>
      <mat-icon class="cursor-pointer">account_circle</mat-icon>
    </div>
  </div>
</nav>
`,
                styles: [`.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 5em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  -webkit-transition: 0.3s cubic-bezier(0.45, 0.8, 0.45, 1);
  transition: 0.3s cubic-bezier(0.45, 0.8, 0.45, 1); }
  .navbar .block {
    width: 70%; }
    .navbar .block .logo {
      font-size: 2em; }
      .navbar .block .logo .interval {
        border-right: 1px solid rgba(0, 0, 0, 0.4);
        padding-right: 1em;
        -webkit-transition: 0.3s cubic-bezier(0.45, 0.8, 0.45, 1);
        transition: 0.3s cubic-bezier(0.45, 0.8, 0.45, 1); }
      .navbar .block .logo .text {
        padding-left: 1em;
        font-family: monospace; }
    .navbar .block .search {
      border: 1px solid rgba(0, 0, 0, 0.0975); }
      .navbar .block .search .text {
        background: transparent;
        border: 0;
        outline: 0;
        text-align: center; }
  .navbar.fixed {
    -webkit-box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
            box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
    height: 3em;
    background: white; }
    .navbar.fixed .block .logo {
      font-size: 2em; }
      .navbar.fixed .block .logo .interval {
        border: 0;
        padding: 0; }
      .navbar.fixed .block .logo .text {
        display: none; }

@media screen and (max-width: 667px) {
  .navbar .block .logo {
    font-size: 1.5em; }
  .navbar .block .search {
    display: none !important; } }
`]
            },] },
];
/** @nocollapse */
NavbarComponent.ctorParameters = () => [];
function NavbarComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NavbarComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NavbarComponent.ctorParameters;
}
//# sourceMappingURL=navbar.component.js.map