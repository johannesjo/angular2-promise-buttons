"use strict";
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
    /**
       * Initializes all html and event handlers
       * @param {Object}btnEl
       */
    PromiseBtnDirective.prototype.prepareBtnEl = /**
       * Initializes all html and event handlers
       * @param {Object}btnEl
       */
    function (btnEl) {
        // handle promises passed via promiseBtn attribute
        this.appendSpinnerTpl(btnEl);
    };
    /**
     * Checks if all required parameters are there and inits the promise handler
     * @param {Object}btnEl
     */
    /**
       * Checks if all required parameters are there and inits the promise handler
       * @param {Object}btnEl
       */
    PromiseBtnDirective.prototype.checkAndInitPromiseHandler = /**
       * Checks if all required parameters are there and inits the promise handler
       * @param {Object}btnEl
       */
    function (btnEl) {
        // check if element and promise is set
        if (btnEl && this.promise) {
            this.initPromiseHandler(btnEl);
        }
    };
    /**
     * Helper FN to add class
     * @param {Object}el
     */
    /**
       * Helper FN to add class
       * @param {Object}el
       */
    PromiseBtnDirective.prototype.addLoadingClass = /**
       * Helper FN to add class
       * @param {Object}el
       */
    function (el) {
        if (typeof this.cfg.btnLoadingClass === 'string') {
            el.classList.add(this.cfg.btnLoadingClass);
        }
    };
    /**
     * Helper FN to remove classes
     * @param {Object}el
     */
    /**
       * Helper FN to remove classes
       * @param {Object}el
       */
    PromiseBtnDirective.prototype.removeLoadingClass = /**
       * Helper FN to remove classes
       * @param {Object}el
       */
    function (el) {
        if (typeof this.cfg.btnLoadingClass === 'string') {
            el.classList.remove(this.cfg.btnLoadingClass);
        }
    };
    /**
     * Handles everything to be triggered when the button is set
     * to loading state.
     * @param {Object}btnEl
     */
    /**
       * Handles everything to be triggered when the button is set
       * to loading state.
       * @param {Object}btnEl
       */
    PromiseBtnDirective.prototype.initLoadingState = /**
       * Handles everything to be triggered when the button is set
       * to loading state.
       * @param {Object}btnEl
       */
    function (btnEl) {
        this.addLoadingClass(btnEl);
        this.disableBtn(btnEl);
    };
    /**
     * Handles everything to be triggered when loading is finished
     * @param {Object}btnEl
     */
    /**
       * Handles everything to be triggered when loading is finished
       * @param {Object}btnEl
       */
    PromiseBtnDirective.prototype.cancelLoadingStateIfPromiseAndMinDurationDone = /**
       * Handles everything to be triggered when loading is finished
       * @param {Object}btnEl
       */
    function (btnEl) {
        if ((!this.cfg.minDuration || this.isMinDurationTimeoutDone) && this.isPromiseDone) {
            this.removeLoadingClass(btnEl);
            this.enableBtn(btnEl);
        }
    };
    /**
     * @param {Object}btnEl
     */
    /**
       * @param {Object}btnEl
       */
    PromiseBtnDirective.prototype.disableBtn = /**
       * @param {Object}btnEl
       */
    function (btnEl) {
        if (this.cfg.disableBtn) {
            btnEl.setAttribute('disabled', 'disabled');
        }
    };
    /**
     * @param {Object}btnEl
     */
    /**
       * @param {Object}btnEl
       */
    PromiseBtnDirective.prototype.enableBtn = /**
       * @param {Object}btnEl
       */
    function (btnEl) {
        if (this.cfg.disableBtn) {
            btnEl.removeAttribute('disabled');
        }
    };
    /**
     * Initializes a watcher for the promise. Also takes
     * this.cfg.minDuration into account if given.
     * @param {Object}btnEl
     */
    /**
       * Initializes a watcher for the promise. Also takes
       * this.cfg.minDuration into account if given.
       * @param {Object}btnEl
       */
    PromiseBtnDirective.prototype.initPromiseHandler = /**
       * Initializes a watcher for the promise. Also takes
       * this.cfg.minDuration into account if given.
       * @param {Object}btnEl
       */
    function (btnEl) {
        var _this = this;
        var promise = this.promise;
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
    /**
       * $compile and append the spinner template to the button.
       * @param {Object}btnEl
       */
    PromiseBtnDirective.prototype.appendSpinnerTpl = /**
       * $compile and append the spinner template to the button.
       * @param {Object}btnEl
       */
    function (btnEl) {
        // TODO add some kind of compilation later on
        btnEl.insertAdjacentHTML('beforeend', this.cfg.spinnerTpl);
    };
    /**
       * Limit loading state to show only for the currently clicked button.
       * Executed only if this.cfg.handleCurrentBtnOnly is set
       */
    PromiseBtnDirective.prototype.handleCurrentBtnOnly = /**
       * Limit loading state to show only for the currently clicked button.
       * Executed only if this.cfg.handleCurrentBtnOnly is set
       */
    function () {
        var _this = this;
        if (!this.cfg.handleCurrentBtnOnly) {
            return true; // return true for testing
        }
        // Click triggers @Input update
        // We need to use timeout to wait for @Input to update
        setTimeout(function () {
            // return if something else than a promise is passed
            if (!_this.promise) {
                return;
            }
            _this.initLoadingState(_this.btnEl);
        }, 0);
    };
    PromiseBtnDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[promiseBtn]'
                },] },
    ];
    /** @nocollapse */
    PromiseBtnDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [user_cfg_1.userCfg,] },] },
    ]; };
    PromiseBtnDirective.propDecorators = {
        "promiseBtn": [{ type: core_1.Input },],
        "handleCurrentBtnOnly": [{ type: core_1.HostListener, args: ['click',] },],
    };
    return PromiseBtnDirective;
}());
exports.PromiseBtnDirective = PromiseBtnDirective;
//# sourceMappingURL=promise-btn.directive.js.map