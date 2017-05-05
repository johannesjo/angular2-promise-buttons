System.register(["@angular/core", "./promise-btn.directive", "./angular2-promise-button.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, promise_btn_directive_1, angular2_promise_button_component_1, Angular2PromiseButtonModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (promise_btn_directive_1_1) {
                promise_btn_directive_1 = promise_btn_directive_1_1;
            },
            function (angular2_promise_button_component_1_1) {
                angular2_promise_button_component_1 = angular2_promise_button_component_1_1;
            }
        ],
        execute: function () {
            Angular2PromiseButtonModule = (function () {
                function Angular2PromiseButtonModule() {
                }
                return Angular2PromiseButtonModule;
            }());
            Angular2PromiseButtonModule = __decorate([
                core_1.NgModule({
                    declarations: [
                        promise_btn_directive_1.PromiseBtnDirective,
                        angular2_promise_button_component_1.Angular2PromiseButtonComponent,
                    ],
                    imports: [],
                    exports: [
                        promise_btn_directive_1.PromiseBtnDirective,
                        angular2_promise_button_component_1.Angular2PromiseButtonComponent,
                    ],
                    providers: []
                })
            ], Angular2PromiseButtonModule);
            exports_1("Angular2PromiseButtonModule", Angular2PromiseButtonModule);
        }
    };
});
//# sourceMappingURL=index.js.map