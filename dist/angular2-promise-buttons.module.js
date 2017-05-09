var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { PromiseBtnDirective } from './promise-btn.directive';
import { userCfg } from './user-cfg';
var Angular2PromiseButtonModule = Angular2PromiseButtonModule_1 = (function () {
    function Angular2PromiseButtonModule() {
    }
    // add forRoot to make it configurable
    Angular2PromiseButtonModule.forRoot = function (userCfgPassedByUser) {
        // NOTE: this is never allowed to contain any conditional logic
        return {
            ngModule: Angular2PromiseButtonModule_1,
            providers: [{ provide: userCfg, useValue: userCfgPassedByUser }]
        };
    };
    return Angular2PromiseButtonModule;
}());
Angular2PromiseButtonModule = Angular2PromiseButtonModule_1 = __decorate([
    NgModule({
        declarations: [
            PromiseBtnDirective,
        ],
        imports: [],
        exports: [
            PromiseBtnDirective,
        ],
        providers: []
    })
], Angular2PromiseButtonModule);
export { Angular2PromiseButtonModule };
var Angular2PromiseButtonModule_1;
//# sourceMappingURL=/home/johannes/www/angular2-promise-buttons/angular2-promise-buttons.module.js.map