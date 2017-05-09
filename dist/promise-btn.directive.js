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
import { Directive, ElementRef, Inject, Input, Renderer2 } from '@angular/core';
import { DEFAULT_CFG } from './default-promise-btn-config';
import { userCfg } from './user-cfg';
var PromiseBtnDirective = (function () {
    function PromiseBtnDirective(el, userCfg, renderer) {
        this.renderer = renderer;
        // provide configuration
        this.cfg = Object.assign({}, DEFAULT_CFG, userCfg);
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
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PromiseBtnDirective.prototype, "promiseBtn", null);
PromiseBtnDirective = __decorate([
    Directive({
        selector: '[promiseBtn]'
    }),
    __param(1, Inject(userCfg)),
    __metadata("design:paramtypes", [ElementRef, Object, Renderer2])
], PromiseBtnDirective);
export { PromiseBtnDirective };
//# sourceMappingURL=/home/johannes/www/angular2-promise-buttons/promise-btn.directive.js.map