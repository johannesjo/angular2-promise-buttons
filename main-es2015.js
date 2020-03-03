(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./projects/angular2-promise-buttons/src/angular2-promise-buttons.module.ts":
/*!**********************************************************************************!*\
  !*** ./projects/angular2-promise-buttons/src/angular2-promise-buttons.module.ts ***!
  \**********************************************************************************/
/*! exports provided: Angular2PromiseButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angular2PromiseButtonModule", function() { return Angular2PromiseButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _promise_btn_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promise-btn.directive */ "./projects/angular2-promise-buttons/src/promise-btn.directive.ts");
/* harmony import */ var _user_cfg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-cfg */ "./projects/angular2-promise-buttons/src/user-cfg.ts");




class Angular2PromiseButtonModule {
    // add forRoot to make it configurable
    static forRoot(config) {
        // NOTE: this is never allowed to contain any conditional logic
        return {
            ngModule: Angular2PromiseButtonModule,
            providers: [{ provide: _user_cfg__WEBPACK_IMPORTED_MODULE_2__["userCfg"], useValue: config }]
        };
    }
}
Angular2PromiseButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Angular2PromiseButtonModule });
Angular2PromiseButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Angular2PromiseButtonModule_Factory(t) { return new (t || Angular2PromiseButtonModule)(); }, providers: [], imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Angular2PromiseButtonModule, { declarations: [_promise_btn_directive__WEBPACK_IMPORTED_MODULE_1__["PromiseBtnDirective"]], exports: [_promise_btn_directive__WEBPACK_IMPORTED_MODULE_1__["PromiseBtnDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Angular2PromiseButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _promise_btn_directive__WEBPACK_IMPORTED_MODULE_1__["PromiseBtnDirective"],
                ],
                imports: [],
                exports: [
                    _promise_btn_directive__WEBPACK_IMPORTED_MODULE_1__["PromiseBtnDirective"],
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./projects/angular2-promise-buttons/src/default-promise-btn-config.ts":
/*!*****************************************************************************!*\
  !*** ./projects/angular2-promise-buttons/src/default-promise-btn-config.ts ***!
  \*****************************************************************************/
/*! exports provided: DEFAULT_CFG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CFG", function() { return DEFAULT_CFG; });
const DEFAULT_CFG = {
    spinnerTpl: '<span class="btn-spinner"></span>',
    disableBtn: true,
    btnLoadingClass: 'is-loading',
    handleCurrentBtnOnly: false,
    minDuration: null,
};


/***/ }),

/***/ "./projects/angular2-promise-buttons/src/index.ts":
/*!********************************************************!*\
  !*** ./projects/angular2-promise-buttons/src/index.ts ***!
  \********************************************************/
/*! exports provided: PromiseBtnDirective, Angular2PromiseButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _promise_btn_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promise-btn.directive */ "./projects/angular2-promise-buttons/src/promise-btn.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PromiseBtnDirective", function() { return _promise_btn_directive__WEBPACK_IMPORTED_MODULE_0__["PromiseBtnDirective"]; });

/* harmony import */ var _angular2_promise_buttons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angular2-promise-buttons.module */ "./projects/angular2-promise-buttons/src/angular2-promise-buttons.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Angular2PromiseButtonModule", function() { return _angular2_promise_buttons_module__WEBPACK_IMPORTED_MODULE_1__["Angular2PromiseButtonModule"]; });





/***/ }),

/***/ "./projects/angular2-promise-buttons/src/promise-btn.directive.ts":
/*!************************************************************************!*\
  !*** ./projects/angular2-promise-buttons/src/promise-btn.directive.ts ***!
  \************************************************************************/
/*! exports provided: PromiseBtnDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromiseBtnDirective", function() { return PromiseBtnDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _default_promise_btn_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-promise-btn-config */ "./projects/angular2-promise-buttons/src/default-promise-btn-config.ts");
/* harmony import */ var _user_cfg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-cfg */ "./projects/angular2-promise-buttons/src/user-cfg.ts");





class PromiseBtnDirective {
    constructor(el, cfg) {
        // provide configuration
        this.cfg = Object.assign({}, _default_promise_btn_config__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CFG"], cfg);
        // save element
        this.btnEl = el.nativeElement;
    }
    set promiseBtn(passedValue) {
        const isObservable = passedValue instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"];
        const isSubscription = passedValue instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"];
        const isBoolean = typeof passedValue === 'boolean';
        const isPromise = passedValue instanceof Promise || (passedValue !== null &&
            typeof passedValue === 'object' &&
            typeof passedValue.then === 'function' &&
            typeof passedValue.catch === 'function');
        if (isObservable) {
            throw new TypeError('promiseBtn must be an instance of Subscription, instance of Observable given');
        }
        else if (isSubscription) {
            this.promise = new Promise((resolve) => {
                passedValue.add(resolve);
            });
        }
        else if (isPromise) {
            this.promise = passedValue;
        }
        else if (isBoolean) {
            this.promise = this.createPromiseFromBoolean(passedValue);
        }
        this.checkAndInitPromiseHandler(this.btnEl);
    }
    ngAfterContentInit() {
        this.prepareBtnEl(this.btnEl);
        // trigger changes once to handle initial promises
        this.checkAndInitPromiseHandler(this.btnEl);
    }
    ngOnDestroy() {
        // cleanup
        if (this.minDurationTimeout) {
            clearTimeout(this.minDurationTimeout);
        }
    }
    createPromiseFromBoolean(val) {
        if (val) {
            return new Promise((resolve) => {
                this._fakePromiseResolve = resolve;
            });
        }
        else {
            if (this._fakePromiseResolve) {
                this._fakePromiseResolve();
            }
            return this.promise;
        }
    }
    /**
     * Initializes all html and event handlers
     */
    prepareBtnEl(btnEl) {
        // handle promises passed via promiseBtn attribute
        this.appendSpinnerTpl(btnEl);
    }
    /**
     * Checks if all required parameters are there and inits the promise handler
     */
    checkAndInitPromiseHandler(btnEl) {
        // check if element and promise is set
        if (btnEl && this.promise) {
            this.initPromiseHandler(btnEl);
        }
    }
    /**
     * Helper FN to add class
     */
    addLoadingClass(el) {
        if (typeof this.cfg.btnLoadingClass === 'string') {
            el.classList.add(this.cfg.btnLoadingClass);
        }
    }
    /**
     * Helper FN to remove classes
     */
    removeLoadingClass(el) {
        if (typeof this.cfg.btnLoadingClass === 'string') {
            el.classList.remove(this.cfg.btnLoadingClass);
        }
    }
    /**
     * Handles everything to be triggered when the button is set
     * to loading state.
     */
    initLoadingState(btnEl) {
        this.addLoadingClass(btnEl);
        this.disableBtn(btnEl);
    }
    /**
     * Handles everything to be triggered when loading is finished
     */
    cancelLoadingStateIfPromiseAndMinDurationDone(btnEl) {
        if ((!this.cfg.minDuration || this.isMinDurationTimeoutDone) && this.isPromiseDone) {
            this.removeLoadingClass(btnEl);
            this.enableBtn(btnEl);
        }
    }
    disableBtn(btnEl) {
        if (this.cfg.disableBtn) {
            btnEl.setAttribute('disabled', 'disabled');
        }
    }
    enableBtn(btnEl) {
        if (this.cfg.disableBtn) {
            btnEl.removeAttribute('disabled');
        }
    }
    /**
     * Initializes a watcher for the promise. Also takes
     * this.cfg.minDuration into account if given.
     */
    initPromiseHandler(btnEl) {
        const promise = this.promise;
        // watch promise to resolve or fail
        this.isMinDurationTimeoutDone = false;
        this.isPromiseDone = false;
        // create timeout if option is set
        if (this.cfg.minDuration) {
            this.minDurationTimeout = window.setTimeout(() => {
                this.isMinDurationTimeoutDone = true;
                this.cancelLoadingStateIfPromiseAndMinDurationDone(btnEl);
            }, this.cfg.minDuration);
        }
        const resolveLoadingState = () => {
            this.isPromiseDone = true;
            this.cancelLoadingStateIfPromiseAndMinDurationDone(btnEl);
        };
        if (!this.cfg.handleCurrentBtnOnly) {
            this.initLoadingState(btnEl);
        }
        // native Promise doesn't have finally
        if (promise.finally) {
            promise.finally(resolveLoadingState);
        }
        else {
            promise
                .then(resolveLoadingState)
                .catch(resolveLoadingState);
        }
    }
    /**
     * $compile and append the spinner template to the button.
     */
    appendSpinnerTpl(btnEl) {
        // TODO add some kind of compilation later on
        btnEl.insertAdjacentHTML('beforeend', this.cfg.spinnerTpl);
    }
    /**
     * Limit loading state to show only for the currently clicked button.
     * Executed only if this.cfg.handleCurrentBtnOnly is set
     */
    handleCurrentBtnOnly() {
        if (!this.cfg.handleCurrentBtnOnly) {
            return true; // return true for testing
        }
        // Click triggers @Input update
        // We need to use timeout to wait for @Input to update
        window.setTimeout(() => {
            // return if something else than a promise is passed
            if (!this.promise) {
                return;
            }
            this.initLoadingState(this.btnEl);
        }, 0);
    }
}
PromiseBtnDirective.ɵfac = function PromiseBtnDirective_Factory(t) { return new (t || PromiseBtnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_cfg__WEBPACK_IMPORTED_MODULE_3__["userCfg"])); };
PromiseBtnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PromiseBtnDirective, selectors: [["", "promiseBtn", ""]], hostBindings: function PromiseBtnDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromiseBtnDirective_click_HostBindingHandler($event) { return ctx.handleCurrentBtnOnly(); });
    } }, inputs: { promiseBtn: "promiseBtn" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromiseBtnDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[promiseBtn]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_user_cfg__WEBPACK_IMPORTED_MODULE_3__["userCfg"]]
            }] }]; }, { promiseBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], handleCurrentBtnOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "./projects/angular2-promise-buttons/src/user-cfg.ts":
/*!***********************************************************!*\
  !*** ./projects/angular2-promise-buttons/src/user-cfg.ts ***!
  \***********************************************************/
/*! exports provided: userCfg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userCfg", function() { return userCfg; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const userCfg = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cfg');


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _projects_angular2_promise_buttons_src_promise_btn_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects/angular2-promise-buttons/src/promise-btn.directive */ "./projects/angular2-promise-buttons/src/promise-btn.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





const STANDARD_DELAY = 1000;
const FAKE_FACT = {
    success() {
        return new Promise((fulfill) => {
            setTimeout(() => {
                fulfill({
                    msg: 'SUCCESS'
                });
            }, STANDARD_DELAY);
        });
    },
    error: () => {
        return new Promise((fulfill, reject) => {
            setTimeout(() => {
                reject({
                    msg: 'ERROR'
                });
            }, STANDARD_DELAY);
        });
    },
    endless: () => {
        return new Promise((fulfill) => {
            setTimeout(fulfill, 99999999);
        });
    },
    endlessObservable: () => {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](() => { });
    },
    initSuccessObservable: () => {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            setTimeout(() => {
                observer.complete();
            }, STANDARD_DELAY);
        });
    },
    initErrorObservable: () => {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            setTimeout(() => {
                observer.error('ERROR');
            }, STANDARD_DELAY);
        });
    },
    initChainedObservable: () => {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            setTimeout(() => {
                observer.next(1);
            }, 1000);
            setTimeout(() => {
                observer.next(2);
            }, 2000);
            setTimeout(() => {
                observer.next(3);
            }, 3000);
            setTimeout(() => {
                observer.complete();
            }, 4000);
        });
    },
};
class AppComponent {
    constructor() {
        this.myBool = true;
        this.endlessInitial();
        this.initEndlessInitialObservable();
    }
    success($event) {
        console.log($event);
        this.successPromise = FAKE_FACT.success();
        return this.successPromise;
    }
    error() {
        this.errorPromise = FAKE_FACT.error()
            .catch(() => {
            console.log('YEAH ERROR');
        });
    }
    endless() {
        this.endlessPromise = FAKE_FACT.endless();
    }
    endlessInitial() {
        this.endlessInitialPromise = FAKE_FACT.endless();
    }
    initSuccessObservable() {
        const observable = FAKE_FACT.initSuccessObservable();
        this.successObservable = observable.subscribe(() => { }, () => { }, () => { });
    }
    initErrorObservable() {
        const observable = FAKE_FACT.initErrorObservable();
        this.errorObservable = observable.subscribe(() => { }, (msg) => {
            console.log(msg);
        }, () => { });
    }
    initChainedObservable() {
        const observable = FAKE_FACT.initChainedObservable();
        this.chainedObservableValue = 'INITIALIZED';
        this.chainedObservable = observable.subscribe((value) => {
            this.chainedObservableValue = value;
        }, () => { }, () => {
            this.chainedObservableValue = 'COMPLETED';
        });
    }
    initEndlessObservable() {
        const observable = FAKE_FACT.endlessObservable();
        this.endlessObservable = observable.subscribe(() => { }, () => { }, () => { });
    }
    initEndlessInitialObservable() {
        const observable = FAKE_FACT.endlessObservable();
        this.endlessInitialObservable = observable.subscribe(() => { }, () => { }, () => { });
    }
    submit() {
        this.submitPromise = FAKE_FACT.success();
    }
    chain() {
        this.promiseIndex = 0;
        this.chainedPromises = this.countChain()
            .then(this.countChain.bind(this))
            .then(this.countChain.bind(this))
            .then(this.countChain.bind(this))
            .then(this.countChain.bind(this));
        return this.chainedPromises;
    }
    countChain() {
        return FAKE_FACT.success()
            .then(() => {
            this.promiseIndex++;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 55, vars: 20, consts: [[1, "btn", "btn-raised", 3, "promiseBtn", "click"], [1, "btn", "btn-raised", 3, "promiseBtn"], ["novalidate", "", 3, "submit"], ["type", "submit", 1, "btn", "btn-raised", 3, "promiseBtn"], [1, "btn", "btn-raised", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_0_listener($event) { return ctx.success($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Success after delay\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_2_listener($event) { return ctx.error(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Error after delay\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener($event) { return ctx.endless(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Never resolving promise\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Loading initially and forever\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Same promise buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener($event) { return ctx.success($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "We\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_14_listener($event) { return ctx.success($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "share\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Chained promise buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_18_listener($event) { return ctx.chain(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Inside a form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AppComponent_Template_form_submit_22_listener($event) { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Observable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_28_listener($event) { return ctx.initSuccessObservable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Success after delay ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_30_listener($event) { return ctx.initErrorObservable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Error after delay ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_34_listener($event) { return ctx.initEndlessObservable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Never resolving Observable ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Loading initially and forever ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Same observable buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_40_listener($event) { return ctx.initSuccessObservable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "We ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_42_listener($event) { return ctx.initSuccessObservable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "share ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Chained observable button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_46_listener($event) { return ctx.initChainedObservable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Simple Boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_51_listener($event) { return ctx.myBool = !ctx.myBool; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("promiseBtn", ctx.successPromise);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("promiseBtn", ctx.errorPromise);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("promiseBtn", ctx.endlessPromise);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("promiseBtn", ctx.endlessInitialPromise);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("promiseBtn", ctx.successPromise);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("promiseBtn", ctx.successPromise);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("promiseBtn", ctx.chainedPromises);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Load promise chain ", ctx.promiseIndex, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("promiseBtn", ctx.submitPromise);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("promiseBtn", ctx.successObservable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("promiseBtn", ctx.errorObservable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("promiseBtn", ctx.endlessObservable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("promiseBtn", ctx.endlessInitialObservable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("promiseBtn", ctx.successObservable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("promiseBtn", ctx.successObservable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("promiseBtn", ctx.chainedObservable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Observable chain ", ctx.chainedObservableValue, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Toggle loading (", ctx.myBool, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("promiseBtn", ctx.myBool);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("My Boolean Btn ", ctx.myBool, " ");
    } }, directives: [_projects_angular2_promise_buttons_src_promise_btn_directive__WEBPACK_IMPORTED_MODULE_2__["PromiseBtnDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _projects_angular2_promise_buttons_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../projects/angular2-promise-buttons/src */ "./projects/angular2-promise-buttons/src/index.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_angular2_promise_buttons_src_angular2_promise_buttons_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projects/angular2-promise-buttons/src/angular2-promise-buttons.module */ "./projects/angular2-promise-buttons/src/angular2-promise-buttons.module.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _projects_angular2_promise_buttons_src__WEBPACK_IMPORTED_MODULE_0__["Angular2PromiseButtonModule"]
                .forRoot({
            // handleCurrentBtnOnly: true,
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _projects_angular2_promise_buttons_src_angular2_promise_buttons_module__WEBPACK_IMPORTED_MODULE_5__["Angular2PromiseButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _projects_angular2_promise_buttons_src__WEBPACK_IMPORTED_MODULE_0__["Angular2PromiseButtonModule"]
                        .forRoot({
                    // handleCurrentBtnOnly: true,
                    }),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/johannes/www/angular2-promise-buttons/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map