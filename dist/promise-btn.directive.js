"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var default_promise_btn_config_1 = require("./default-promise-btn-config");
var user_cfg_1 = require("./user-cfg");
var PromiseBtnDirective = /** @class */ (function () {
    function PromiseBtnDirective(el, userCfg) {
        // provide configuration
        this.cfg = Object.assign({}, default_promise_btn_config_1.DEFAULT_CFG, userCfg);
        // save element
        this.btnEl = el.nativeElement;
    }
    Object.defineProperty(PromiseBtnDirective.prototype, "promiseBtn", {
        set: function (passedValue) {
            var isObservable = passedValue instanceof rxjs_1.Observable;
            var isSubscription = passedValue instanceof rxjs_1.Subscription;
            var isBoolean = typeof passedValue === 'boolean';
            var isPromise = passedValue instanceof Promise || (passedValue !== null &&
                typeof passedValue === 'object' &&
                typeof passedValue.then === 'function' &&
                typeof passedValue.catch === 'function');
            if (isObservable) {
                throw new TypeError('promiseBtn must be an instance of Subscription, instance of Observable given');
            }
            else if (isSubscription) {
                this.promise = new Promise(function (resolve) {
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
    PromiseBtnDirective.prototype.createPromiseFromBoolean = function (val) {
        var _this = this;
        if (val) {
            return new Promise(function (resolve) {
                _this._fakePromiseResolve = resolve;
            });
        }
        else {
            if (this._fakePromiseResolve) {
                this._fakePromiseResolve();
            }
            return this.promise;
        }
    };
    /**
     * Initializes all html and event handlers
     * @param {Object}btnEl
     */
    PromiseBtnDirective.prototype.prepareBtnEl = function (btnEl) {
        // handle promises passed via promiseBtn attribute
        this.appendSpinnerTpl(btnEl);
    };
    /**
     * Checks if all required parameters are there and inits the promise handler
     * @param {Object}btnEl
     */
    PromiseBtnDirective.prototype.checkAndInitPromiseHandler = function (btnEl) {
        // check if element and promise is set
        if (btnEl && this.promise) {
            this.initPromiseHandler(btnEl);
        }
    };
    /**
     * Helper FN to add class
     * @param {Object}el
     */
    PromiseBtnDirective.prototype.addLoadingClass = function (el) {
        if (typeof this.cfg.btnLoadingClass === 'string') {
            el.classList.add(this.cfg.btnLoadingClass);
        }
    };
    /**
     * Helper FN to remove classes
     * @param {Object}el
     */
    PromiseBtnDirective.prototype.removeLoadingClass = function (el) {
        if (typeof this.cfg.btnLoadingClass === 'string') {
            el.classList.remove(this.cfg.btnLoadingClass);
        }
    };
    /**
     * Handles everything to be triggered when the button is set
     * to loading state.
     * @param {Object}btnEl
     */
    PromiseBtnDirective.prototype.initLoadingState = function (btnEl) {
        this.addLoadingClass(btnEl);
        this.disableBtn(btnEl);
    };
    /**
     * Handles everything to be triggered when loading is finished
     * @param {Object}btnEl
     */
    PromiseBtnDirective.prototype.cancelLoadingStateIfPromiseAndMinDurationDone = function (btnEl) {
        if ((!this.cfg.minDuration || this.isMinDurationTimeoutDone) && this.isPromiseDone) {
            this.removeLoadingClass(btnEl);
            this.enableBtn(btnEl);
        }
    };
    /**
     * @param {Object}btnEl
     */
    PromiseBtnDirective.prototype.disableBtn = function (btnEl) {
        if (this.cfg.disableBtn) {
            btnEl.setAttribute('disabled', 'disabled');
        }
    };
    /**
     * @param {Object}btnEl
     */
    PromiseBtnDirective.prototype.enableBtn = function (btnEl) {
        if (this.cfg.disableBtn) {
            btnEl.removeAttribute('disabled');
        }
    };
    /**
     * Initializes a watcher for the promise. Also takes
     * this.cfg.minDuration into account if given.
     * @param {Object}btnEl
     */
    PromiseBtnDirective.prototype.initPromiseHandler = function (btnEl) {
        var _this = this;
        var promise = this.promise;
        // watch promise to resolve or fail
        this.isMinDurationTimeoutDone = false;
        this.isPromiseDone = false;
        // create timeout if option is set
        if (this.cfg.minDuration) {
            this.minDurationTimeout = window.setTimeout(function () {
                _this.isMinDurationTimeoutDone = true;
                _this.cancelLoadingStateIfPromiseAndMinDurationDone(btnEl);
            }, this.cfg.minDuration);
        }
        var resolveLoadingState = function () {
            _this.isPromiseDone = true;
            _this.cancelLoadingStateIfPromiseAndMinDurationDone(btnEl);
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
     * Limit loading state to show only for the currently clicked button.
     * Executed only if this.cfg.handleCurrentBtnOnly is set
     */
    PromiseBtnDirective.prototype.handleCurrentBtnOnly = function () {
        var _this = this;
        if (!this.cfg.handleCurrentBtnOnly) {
            return true; // return true for testing
        }
        // Click triggers @Input update
        // We need to use timeout to wait for @Input to update
        window.setTimeout(function () {
            // return if something else than a promise is passed
            if (!_this.promise) {
                return;
            }
            _this.initLoadingState(_this.btnEl);
        }, 0);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PromiseBtnDirective.prototype, "promiseBtn", null);
    __decorate([
        core_1.HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PromiseBtnDirective.prototype, "handleCurrentBtnOnly", null);
    PromiseBtnDirective = __decorate([
        core_1.Directive({
            selector: '[promiseBtn]'
        }),
        __param(1, core_1.Inject(user_cfg_1.userCfg)),
        __metadata("design:paramtypes", [core_1.ElementRef, Object])
    ], PromiseBtnDirective);
    return PromiseBtnDirective;
}());
exports.PromiseBtnDirective = PromiseBtnDirective;
//# sourceMappingURL=promise-btn.directive.js.map