webpackJsonp([0,3],{

/***/ 10:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 10;


/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_promise_btn_config__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_cfg__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromiseBtnDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var PromiseBtnDirective = (function () {
    function PromiseBtnDirective(el, userCfg, renderer) {
        this.renderer = renderer;
        // provide configuration
        this.cfg = Object.assign({}, __WEBPACK_IMPORTED_MODULE_1__default_promise_btn_config__["a" /* DEFAULT_CFG */], userCfg);
        // save element
        this.btnEl = el.nativeElement;
    }
    Object.defineProperty(PromiseBtnDirective.prototype, "promiseBtn", {
        set: function (promise) {
            this.promise = promise;
            this.checkAndInitPromiseHandler(this.btnEl);
        },
        enumerable: true,
        configurable: true
    });
    PromiseBtnDirective.prototype.ngAfterContentInit = function () {
        this.prepareBtnEl(this.btnEl);
        // trigger changes once to handle initial promises
        this.checkAndInitPromiseHandler(this.btnEl);
    };
    PromiseBtnDirective.prototype.ngOnDestroy = function () {
        // cleanup
        if (this.minDurationTimeout) {
            clearTimeout(this.minDurationTimeout);
        }
    };
    /**
     * Initializes all html and event handlers
     * @param {Object}btnEl
     */
    PromiseBtnDirective.prototype.prepareBtnEl = function (btnEl) {
        // handle promises passed via promiseBtn attribute
        this.appendSpinnerTpl(btnEl);
        this.addHandlersForCurrentBtnOnlyIfSet(btnEl);
    };
    /**
     * Checks if all required parameters are there and inits the promise handler
     * @param {Object}btnEl
     */
    PromiseBtnDirective.prototype.checkAndInitPromiseHandler = function (btnEl) {
        if (btnEl && this.promise) {
            if (!this.promiseWatcher) {
                this.initPromiseHandler(this.promise, btnEl);
            }
        }
    };
    /**
     * Helper FN to add class
     * @param {Object}el
     */
    PromiseBtnDirective.prototype.addLoadingClass = function (el) {
        if (typeof this.cfg.btnLoadingClass === 'string') {
            this.renderer.addClass(el, this.cfg.btnLoadingClass);
        }
    };
    /**
     * Helper FN to remove classes
     * @param {Object}el
     */
    PromiseBtnDirective.prototype.removeLoadingClass = function (el) {
        if (typeof this.cfg.btnLoadingClass === 'string') {
            this.renderer.removeClass(el, this.cfg.btnLoadingClass);
        }
    };
    /**
     * Handles everything to be triggered when the button is set
     * to loading state.
     * @param {Object}btnEl
     */
    PromiseBtnDirective.prototype.initLoadingState = function (btnEl) {
        if (this.cfg.btnLoadingClass) {
            this.addLoadingClass(btnEl);
        }
        if (this.cfg.disableBtn) {
            this.disableBtn(btnEl);
        }
    };
    /**
     * Handles everything to be triggered when loading is finished
     * @param {Object}btnEl
     */
    PromiseBtnDirective.prototype.cancelLoadingStateIfPromiseAndMinDurationDone = function (btnEl) {
        if ((!this.cfg.minDuration || this.isMinDurationTimeoutDone) && this.isPromiseDone) {
            if (this.cfg.btnLoadingClass) {
                this.removeLoadingClass(btnEl);
            }
            if (this.cfg.disableBtn) {
                this.enableBtn(btnEl);
            }
        }
    };
    /**
     * @param {Object}btnEl
     */
    PromiseBtnDirective.prototype.disableBtn = function (btnEl) {
        this.renderer.setAttribute(btnEl, 'disabled', 'disabled');
    };
    /**
     * @param {Object}btnEl
     */
    PromiseBtnDirective.prototype.enableBtn = function (btnEl) {
        this.renderer.removeAttribute(btnEl, 'disabled');
    };
    /**
     * Initializes a watcher for the promise. Also takes
     * this.cfg.minDuration into account if given.
     * @param {Object}promise
     * @param {Object}btnEl
     */
    PromiseBtnDirective.prototype.initPromiseHandler = function (promise, btnEl) {
        var _this = this;
        // watch promise to resolve or fail
        this.isMinDurationTimeoutDone = false;
        this.isPromiseDone = false;
        // create timeout if option is set
        if (this.cfg.minDuration) {
            this.minDurationTimeout = setTimeout(function () {
                _this.isMinDurationTimeoutDone = true;
                _this.cancelLoadingStateIfPromiseAndMinDurationDone(btnEl);
            }, this.cfg.minDuration);
        }
        var resolveLoadingState = function () {
            _this.isPromiseDone = true;
            _this.cancelLoadingStateIfPromiseAndMinDurationDone(btnEl);
        };
        // for regular promises
        if (promise && promise.then) {
            if (!this.cfg.handleCurrentBtnOnly) {
                this.initLoadingState(btnEl);
            }
            if (promise.finally) {
                promise.finally(resolveLoadingState);
            }
            else {
                promise
                    .then(resolveLoadingState)
                    .catch(resolveLoadingState);
            }
        }
    };
    /**
     * $compile and append the spinner template to the button.
     * @param {Object}btnEl
     */
    PromiseBtnDirective.prototype.appendSpinnerTpl = function (btnEl) {
        // TODO add some kind of compilation later on
        btnEl.insertAdjacentHTML('beforeend', this.cfg.spinnerTpl);
    };
    /**
     * Used to limit loading state to show only for the currently
     * clicked button.
     * @param {Object}btnEl
     */
    PromiseBtnDirective.prototype.addHandlersForCurrentBtnOnlyIfSet = function (btnEl) {
        var _this = this;
        // handle current button only options via click
        if (this.cfg.handleCurrentBtnOnly) {
            btnEl.addEventListener(this.cfg.CLICK_EVENT, function () {
                _this.initLoadingState(btnEl);
            });
        }
    };
    return PromiseBtnDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PromiseBtnDirective.prototype, "promiseBtn", null);
PromiseBtnDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Directive */])({
        selector: '[promiseBtn]'
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__user_cfg__["a" /* userCfg */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Renderer2 */]) === "function" && _b || Object])
], PromiseBtnDirective);

var _a, _b;
//# sourceMappingURL=/home/johannes/www/angular2-promise-buttons/promise-btn.directive.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userCfg; });

var userCfg = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* InjectionToken */]('cfg');
//# sourceMappingURL=/home/johannes/www/angular2-promise-buttons/user-cfg.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zone_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zone_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_zone_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflect_metadata__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(32);






if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/johannes/www/angular2-promise-buttons/main.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var STANDARD_DELAY = 1000;
var FAKE_FACT = {
    success: function () {
        return new Promise(function (fulfill) {
            setTimeout(function () {
                fulfill({
                    msg: 'SUCCESS'
                });
            }, STANDARD_DELAY);
        });
    },
    error: function () {
        return new Promise(function (fulfill, reject) {
            setTimeout(function () {
                reject({
                    msg: 'ERROR'
                });
            }, STANDARD_DELAY);
        });
    },
    endless: function () {
        return new Promise(function (fulfill) {
            setTimeout(fulfill, 99999999);
        });
    }
};
var AppComponent = (function () {
    function AppComponent() {
        this.endlessInitial();
    }
    AppComponent.prototype.success = function ($event) {
        console.log($event);
        this.successPromise = FAKE_FACT.success();
        return this.successPromise;
    };
    AppComponent.prototype.error = function () {
        this.errorPromise = FAKE_FACT.error()
            .catch(function () {
            console.log('YEAH ERROR');
        });
    };
    AppComponent.prototype.endless = function () {
        this.endlessPromise = FAKE_FACT.endless();
    };
    AppComponent.prototype.endlessInitial = function () {
        this.endlessInitialPromise = FAKE_FACT.endless();
    };
    AppComponent.prototype.submit = function () {
        this.submitPromise = FAKE_FACT.success();
    };
    AppComponent.prototype.chain = function () {
        this.promiseIndex = 0;
        this.chainedPromises = this.countChain()
            .then(this.countChain.bind(this))
            .then(this.countChain.bind(this))
            .then(this.countChain.bind(this))
            .then(this.countChain.bind(this));
        return this.chainedPromises;
    };
    AppComponent.prototype.countChain = function () {
        var _this = this;
        return FAKE_FACT.success()
            .then(function () {
            _this.promiseIndex++;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(38),
        styles: [__webpack_require__(37)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=/home/johannes/www/angular2-promise-buttons/app.component.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_symlink_index__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__component_symlink_index__["a" /* Angular2PromiseButtonModule */]
                .forRoot(),
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/johannes/www/angular2-promise-buttons/app.module.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/home/johannes/www/angular2-promise-buttons/environment.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__promise_btn_directive__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_cfg__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2PromiseButtonModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Angular2PromiseButtonModule = Angular2PromiseButtonModule_1 = (function () {
    function Angular2PromiseButtonModule() {
    }
    // add forRoot to make it configurable
    Angular2PromiseButtonModule.forRoot = function (userCfgPassedByUser) {
        // NOTE: this is never allowed to contain any conditional logic
        return {
            ngModule: Angular2PromiseButtonModule_1,
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__user_cfg__["a" /* userCfg */], useValue: userCfgPassedByUser }]
        };
    };
    return Angular2PromiseButtonModule;
}());
Angular2PromiseButtonModule = Angular2PromiseButtonModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__promise_btn_directive__["a" /* PromiseBtnDirective */],
        ],
        imports: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__promise_btn_directive__["a" /* PromiseBtnDirective */],
        ],
        providers: []
    })
], Angular2PromiseButtonModule);

var Angular2PromiseButtonModule_1;
//# sourceMappingURL=/home/johannes/www/angular2-promise-buttons/angular2-promise-buttons.module.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_CFG; });
var DEFAULT_CFG = {
    spinnerTpl: '<span class="btn-spinner"></span>',
    disableBtn: true,
    btnLoadingClass: 'is-loading',
    handleCurrentBtnOnly: false,
    minDuration: false,
    CLICK_EVENT: 'click',
};
//# sourceMappingURL=/home/johannes/www/angular2-promise-buttons/default-promise-btn-config.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__promise_btn_directive__ = __webpack_require__(12);
/* unused harmony reexport PromiseBtnDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular2_promise_buttons_module__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__angular2_promise_buttons_module__["a"]; });


//# sourceMappingURL=/home/johannes/www/angular2-promise-buttons/index.js.map

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\"\n        (click)=\"success($event)\"\n        [promiseBtn]=\"successPromise\">Success after delay\n</button>\n<button class=\"btn btn-primary\"\n        (click)=\"error()\"\n        [promiseBtn]=\"errorPromise\">Error after delay\n</button>\n<br>\n<br>\n<button class=\"btn btn-primary\"\n        (click)=\"endless()\"\n        [promiseBtn]=\"endlessPromise\">Never resolving promise\n</button>\n<button class=\"btn btn-primary\"\n        [promiseBtn]=\"endlessInitialPromise\">Loading initially and forever\n</button>\n\n<h3>Same promise buttons</h3>\n<button class=\"btn btn-primary\"\n        (click)=\"success($event)\"\n        [promiseBtn]=\"successPromise\">We\n</button>\n<button class=\"btn btn-primary\"\n        (click)=\"success($event)\"\n        [promiseBtn]=\"successPromise\">share\n</button>\n\n<h3>Chained promise buttons</h3>\n<button class=\"btn btn-primary\"\n        (click)=\"chain()\"\n        [promiseBtn]=\"chainedPromises\">Load promise chain {{ promiseIndex }}\n</button>\n\n\n<h3>Inside a form</h3>\n<form (submit)=\"submit()\"\n      novalidate>\n  <button class=\"btn btn-primary\"\n          type=\"submit\"\n          [promiseBtn]=\"submitPromise\">Submit\n  </button>\n</form>\n\n\n\n"

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ })

},[64]);
//# sourceMappingURL=main.bundle.js.map