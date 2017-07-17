import {AfterContentInit, Directive, ElementRef, HostListener, Inject, Input, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import * as BlueBird from 'bluebird';
import {DEFAULT_CFG} from './default-promise-btn-config';
import {PromiseBtnConfig} from './promise-btn-config';
import {userCfg} from './user-cfg';

@Directive({
  selector: '[promiseBtn]'
})

export class PromiseBtnDirective implements OnDestroy, AfterContentInit {
  cfg: PromiseBtnConfig;
  // the timeout used for min duration display
  minDurationTimeout: number;
  // boolean to determine minDurationTimeout state
  isMinDurationTimeoutDone: boolean;
  // boolean to determine if promise was resolved
  isPromiseDone: boolean;
  // the promise button button element
  btnEl: HTMLElement;
  // the promise itself or a function expression
  promise: (Promise<any> & BlueBird<any>);

  constructor(el: ElementRef,
              @Inject(userCfg) userCfg: any) {
    // provide configuration
    this.cfg = Object.assign({}, DEFAULT_CFG, userCfg);

    // save element
    this.btnEl = el.nativeElement;
  }

  @Input()
  set promiseBtn(request: any) {
    const isObservable: boolean = request instanceof Observable;
    const isPromise: boolean = request instanceof Promise || (
      request !== null &&
      typeof request === 'object' &&
      typeof request.then === 'function' &&
      typeof request.catch === 'function'
    );

    if (isObservable) {
      this.promise = request.toPromise();
    } else if (isPromise) {
      this.promise = request;
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

  /**
   * Initializes all html and event handlers
   * @param {Object}btnEl
   */
  prepareBtnEl(btnEl: HTMLElement) {
    // handle promises passed via promiseBtn attribute
    this.appendSpinnerTpl(btnEl);
  }

  /**
   * Checks if all required parameters are there and inits the promise handler
   * @param {Object}btnEl
   */
  checkAndInitPromiseHandler(btnEl: HTMLElement) {
    // check if element and promise is set
    if (btnEl && this.promise) {
      this.initPromiseHandler(btnEl);
    }
  }

  /**
   * Helper FN to add class
   * @param {Object}el
   */
  addLoadingClass(el: any) {
    if (typeof this.cfg.btnLoadingClass === 'string') {
      el.classList.add(this.cfg.btnLoadingClass);
    }
  }

  /**
   * Helper FN to remove classes
   * @param {Object}el
   */
  removeLoadingClass(el: any) {
    if (typeof this.cfg.btnLoadingClass === 'string') {
      el.classList.remove(this.cfg.btnLoadingClass);
    }
  }

  /**
   * Handles everything to be triggered when the button is set
   * to loading state.
   * @param {Object}btnEl
   */
  initLoadingState(btnEl: HTMLElement) {
    this.addLoadingClass(btnEl);
    this.disableBtn(btnEl);
  }

  /**
   * Handles everything to be triggered when loading is finished
   * @param {Object}btnEl
   */
  cancelLoadingStateIfPromiseAndMinDurationDone(btnEl: HTMLElement) {
    if ((!this.cfg.minDuration || this.isMinDurationTimeoutDone) && this.isPromiseDone) {
      this.removeLoadingClass(btnEl);
      this.enableBtn(btnEl);
    }
  }

  /**
   * @param {Object}btnEl
   */
  disableBtn(btnEl: HTMLElement) {
    if (this.cfg.disableBtn) {
      btnEl.setAttribute('disabled', 'disabled');
    }
  }

  /**
   * @param {Object}btnEl
   */
  enableBtn(btnEl: HTMLElement) {
    if (this.cfg.disableBtn) {
      btnEl.removeAttribute('disabled');
    }
  }

  /**
   * Initializes a watcher for the promise. Also takes
   * this.cfg.minDuration into account if given.
   * @param {Object}btnEl
   */

  initPromiseHandler(btnEl: HTMLElement) {
    const promise = this.promise;

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

    if (!this.cfg.handleCurrentBtnOnly) {
      this.initLoadingState(btnEl);
    }
    // native Promise doesn't have finally
    if (promise.finally) {
      promise.finally(resolveLoadingState);
    } else {
      promise
        .then(resolveLoadingState)
        .catch(resolveLoadingState);
    }

  }


  /**
   * $compile and append the spinner template to the button.
   * @param {Object}btnEl
   */
  appendSpinnerTpl(btnEl: HTMLElement) {
    // TODO add some kind of compilation later on
    btnEl.insertAdjacentHTML('beforeend', this.cfg.spinnerTpl);
  }

  /**
   * Limit loading state to show only for the currently clicked button.
   * Executed only if this.cfg.handleCurrentBtnOnly is set
   */
  @HostListener('click')
  handleCurrentBtnOnly() {
    if (!this.cfg.handleCurrentBtnOnly) {
      return false; // return false for testing
    }

    // Click triggers @Input update
    // We need to use timeout to wait for @Input to update
    setTimeout(() => {
      // return if something else than a promise is passed
      if (!this.promise) {
        return;
      }

      this.initLoadingState(this.btnEl);
    }, 0);
  }
}
