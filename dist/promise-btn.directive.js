"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const default_promise_btn_config_1 = require("./default-promise-btn-config");
const user_cfg_1 = require("./user-cfg");
class PromiseBtnDirective {
    constructor(el, userCfg, renderer) {
        this.renderer = renderer;
        // provide configuration
        this.cfg = Object.assign({}, default_promise_btn_config_1.DEFAULT_CFG, userCfg);
        // save element
        this.btnEl = el.nativeElement;
    }
    set promiseBtn(promise) {
        this.promise = promise;
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
    /**
     * Initializes all html and event handlers
     * @param {Object}btnEl
     */
    prepareBtnEl(btnEl) {
        // handle promises passed via promiseBtn attribute
        this.appendSpinnerTpl(btnEl);
        this.addHandlersForCurrentBtnOnlyIfSet(btnEl);
    }
    /**
     * Checks if all required parameters are there and inits the promise handler
     * @param {Object}btnEl
     */
    checkAndInitPromiseHandler(btnEl) {
        if (btnEl && this.promise) {
            if (!this.promiseWatcher) {
                this.initPromiseHandler(this.promise, btnEl);
            }
        }
    }
    /**
     * Helper FN to add class
     * @param {Object}el
     */
    addLoadingClass(el) {
        if (typeof this.cfg.btnLoadingClass === 'string') {
            this.renderer.addClass(el, this.cfg.btnLoadingClass);
        }
    }
    /**
     * Helper FN to remove classes
     * @param {Object}el
     */
    removeLoadingClass(el) {
        if (typeof this.cfg.btnLoadingClass === 'string') {
            this.renderer.removeClass(el, this.cfg.btnLoadingClass);
        }
    }
    /**
     * Handles everything to be triggered when the button is set
     * to loading state.
     * @param {Object}btnEl
     */
    initLoadingState(btnEl) {
        if (this.cfg.btnLoadingClass) {
            this.addLoadingClass(btnEl);
        }
        if (this.cfg.disableBtn) {
            this.disableBtn(btnEl);
        }
    }
    /**
     * Handles everything to be triggered when loading is finished
     * @param {Object}btnEl
     */
    cancelLoadingStateIfPromiseAndMinDurationDone(btnEl) {
        if ((!this.cfg.minDuration || this.isMinDurationTimeoutDone) && this.isPromiseDone) {
            if (this.cfg.btnLoadingClass) {
                this.removeLoadingClass(btnEl);
            }
            if (this.cfg.disableBtn) {
                this.enableBtn(btnEl);
            }
        }
    }
    /**
     * @param {Object}btnEl
     */
    disableBtn(btnEl) {
        this.renderer.setAttribute(btnEl, 'disabled', 'disabled');
    }
    /**
     * @param {Object}btnEl
     */
    enableBtn(btnEl) {
        this.renderer.removeAttribute(btnEl, 'disabled');
    }
    /**
     * Initializes a watcher for the promise. Also takes
     * this.cfg.minDuration into account if given.
     * @param {Object}promise
     * @param {Object}btnEl
     */
    initPromiseHandler(promise, btnEl) {
        // watch promise to resolve or fail
        this.isMinDurationTimeoutDone = false;
        this.isPromiseDone = false;
        // create timeout if option is set
        if (this.cfg.minDuration) {
            this.minDurationTimeout = setTimeout(() => {
                this.isMinDurationTimeoutDone = true;
                this.cancelLoadingStateIfPromiseAndMinDurationDone(btnEl);
            }, this.cfg.minDuration);
        }
        const resolveLoadingState = () => {
            this.isPromiseDone = true;
            this.cancelLoadingStateIfPromiseAndMinDurationDone(btnEl);
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
    }
    /**
     * $compile and append the spinner template to the button.
     * @param {Object}btnEl
     */
    appendSpinnerTpl(btnEl) {
        // TODO add some kind of compilation later on
        btnEl.insertAdjacentHTML('beforeend', this.cfg.spinnerTpl);
    }
    /**
     * Used to limit loading state to show only for the currently
     * clicked button.
     * @param {Object}btnEl
     */
    addHandlersForCurrentBtnOnlyIfSet(btnEl) {
        // handle current button only options via click
        if (this.cfg.handleCurrentBtnOnly) {
            btnEl.addEventListener(this.cfg.CLICK_EVENT, () => {
                this.initLoadingState(btnEl);
            });
        }
    }
}
PromiseBtnDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[promiseBtn]'
            },] },
];
/** @nocollapse */
PromiseBtnDirective.ctorParameters = () => [
    { type: core_1.ElementRef, },
    { type: undefined, decorators: [{ type: core_1.Inject, args: [user_cfg_1.userCfg,] },] },
    { type: core_1.Renderer2, },
];
PromiseBtnDirective.propDecorators = {
    'promiseBtn': [{ type: core_1.Input },],
};
exports.PromiseBtnDirective = PromiseBtnDirective;
//# sourceMappingURL=promise-btn.directive.js.map