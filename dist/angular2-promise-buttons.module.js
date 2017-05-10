"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var promise_btn_directive_1 = require("./promise-btn.directive");
var user_cfg_1 = require("./user-cfg");
var Angular2PromiseButtonModule = (function () {
    function Angular2PromiseButtonModule() {
    }
    // add forRoot to make it configurable
    Angular2PromiseButtonModule.forRoot = function (userCfgPassedByUser) {
        // NOTE: this is never allowed to contain any conditional logic
        return {
            ngModule: Angular2PromiseButtonModule,
            providers: [{ provide: user_cfg_1.userCfg, useValue: userCfgPassedByUser }]
        };
    };
    return Angular2PromiseButtonModule;
}());
Angular2PromiseButtonModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    promise_btn_directive_1.PromiseBtnDirective,
                ],
                imports: [],
                exports: [
                    promise_btn_directive_1.PromiseBtnDirective,
                ],
                providers: []
            },] },
];
/** @nocollapse */
Angular2PromiseButtonModule.ctorParameters = function () { return []; };
exports.Angular2PromiseButtonModule = Angular2PromiseButtonModule;
//# sourceMappingURL=angular2-promise-buttons.module.js.map