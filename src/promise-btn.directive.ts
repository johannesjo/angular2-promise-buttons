import {AfterContentInit, Directive, ElementRef, Input, OnDestroy} from '@angular/core';

const DEFAULT_CFG = {
  spinnerTpl: '<span class="btn-spinner"></span>',
  priority: 0,
  disableBtn: true,
  btnLoadingClass: 'is-loading',
  addClassToCurrentBtnOnly: false,
  disableCurrentBtnOnly: false,
  minDuration: false,
  CLICK_EVENT: 'click',
  CLICK_ATTR: 'ngClick',
  SUBMIT_EVENT: 'submit',
  SUBMIT_ATTR: 'ngSubmit',
  BTN_SELECTOR: 'button'
};

@Directive({
  selector: '[promiseBtn]'
})

export class PromiseBtnDirective implements OnDestroy, AfterContentInit {
  cfg: any;
  // later initialized via initPromiseWatcher()
  promiseWatcher: any;
  // the timeout used for min duration display
  minDurationTimeout: any;
  // boolean to determine minDurationTimeout state
  isMinDurationTimeoutDone: boolean;
  // boolean to determine if promise was resolved
  isPromiseDone: boolean;
  // boolean to determine button was initialized
  isInitialized: boolean;
  // the promise button directive element
  el: any;
  // the promise button button element
  btnEl: any;
  // a pointer to the old value of promise
  lastPromise: Promise<any>;
  // the promise itself or a function expression
  promise: Promise<any>;

  constructor(el: ElementRef) {
    // provide configuration
    this.cfg = DEFAULT_CFG;

    // save element
    this.el = el.nativeElement;
  }

  @Input()
  set promiseBtn(promise: Promise<any>) {
    this.promise = promise;
    this.checkAndInitPromiseWatcher(this.el);
  }

  ngAfterContentInit() {
    // check if there is any value given via attrs.promiseBtn
    // if (!this.promise) {
    //   // handle ngClick function directly returning a promise
    //   if (this.el.hasAttribute(this.cfg.CLICK_ATTR)) {
    //     this.appendSpinnerTpl(this.el);
    //     this.addHandlersForCurrentBtnOnly(this.el);
    //     this.initHandlingOfViewFunctionsReturningAPromise(this.cfg.CLICK_EVENT, this.cfg.CLICK_ATTR, this.el);
    //   } else if (this.el.hasAttribute(this.cfg.SUBMIT_ATTR)) {
    //     // handle ngSubmit function directly returning a promise
    //     // get child submits for form elements
    //     const btnElements = this.getSubmitBtnChildrenForForm(this.el);
    //
    //     this.appendSpinnerTpl(btnElements);
    //     this.addHandlersForCurrentBtnOnly(btnElements);
    //     this.initHandlingOfViewFunctionsReturningAPromise(this.cfg.SUBMIT_EVENT, this.cfg.SUBMIT_ATTR, btnElements);
    //   }
    // } else if (this.promise && this.promise.then) {
    // handle promises passed via promiseBtn attribute
    // this.appendSpinnerTpl(this.el);
    // this.addHandlersForCurrentBtnOnly(this.el);
    // handle promise passed directly via attribute as variable
    // this.initPromiseWatcher(() => {
    //   return this.promise;
    // }, this.el);

    // needs an initial trigger

    // }


    this.appendSpinnerTpl(this.el);
    this.addHandlersForCurrentBtnOnly(this.el);

    // trigger changes once
    this.checkAndInitPromiseWatcher(this.el);
  }


  ngOnDestroy() {
    // cleanup
    if (this.minDurationTimeout) {
      clearTimeout(this.minDurationTimeout);
    }
  }

  prepareBtnEl(btnEl: any) {
    // handle promises passed via promiseBtn attribute
    this.appendSpinnerTpl(btnEl);
    this.addHandlersForCurrentBtnOnly(btnEl);
  }

  checkAndInitPromiseWatcher(btnEl: any) {
    console.log('checkAndInitPromiseWatcher', btnEl, this.promise);
    const isSamePromise = (this.lastPromise === this.promise);
    if (btnEl && this.promise) {
      if (!this.promiseWatcher) {
        this.initPromiseHandler(this.promise, btnEl);
      }
      this.lastPromise = this.promise;
    }
  }

  addClass(el: any, classNameToAdd: string) {
    el.className += ' ' + classNameToAdd;
    el.className = el.className.trim();
  }

  removeClass(el: any, classNameToRemove: string) {
    let newElClass = ' ' + el.className + ' ';
    while (newElClass.indexOf(' ' + classNameToRemove + ' ') !== -1) {
      newElClass = newElClass.replace(' ' + classNameToRemove + ' ', '');
    }
    el.className = newElClass.trim();
  }

  /**
   * Handles everything to be triggered when the button is set
   * to loading state.
   * @param {Object}btnEl
   */
  initLoadingState(btnEl: any) {
    if (this.cfg.btnLoadingClass && !this.cfg.addClassToCurrentBtnOnly) {
      this.addClass(btnEl, this.cfg.btnLoadingClass);
    }
    if (this.cfg.disableBtn && !this.cfg.disableCurrentBtnOnly) {
      btnEl.setAttribute('disabled', 'disabled');
    }
  }

  /**
   * Handles everything to be triggered when loading is finished
   * @param {Object}btnEl
   */
  cancelLoadingState(btnEl: any) {
    if ((!this.cfg.minDuration || this.isMinDurationTimeoutDone) && this.isPromiseDone) {
      if (this.cfg.btnLoadingClass) {
        this.removeClass(btnEl, this.cfg.btnLoadingClass);
      }
      if (this.cfg.disableBtn) {
        btnEl.removeAttribute('disabled');
      }
    }
  }

  /**
   * Initializes a watcher for the promise. Also takes
   * this.cfg.minDuration into account if given.
   * @param {Object}promise
   * @param {Object}btnEl
   */

  initPromiseHandler(promise: Promise<any>, btnEl: any) {
    // watch promise to resolve or fail
    this.isMinDurationTimeoutDone = false;
    this.isPromiseDone = false;

    // create timeout if option is set
    if (this.cfg.minDuration) {
      this.minDurationTimeout = setTimeout(() => {
        this.isMinDurationTimeoutDone = true;
        this.cancelLoadingState(btnEl);
      }, this.cfg.minDuration);
    }

    // for regular promises
    if (promise && promise.then) {
      this.initLoadingState(btnEl);
      promise.then(() => {
        console.log('PROMISE DONE');

        this.isPromiseDone = true;
        this.cancelLoadingState(btnEl);
      });
    }
  }


  /**
   * Get the callbacks from the (String) expression given.
   * @param {String}expression
   * @returns {Array}
   */
  getCallbacks(expression: any) {
    console.log('getCallbacks');
    // return expression
    // // split by ; to get different functions if any
    //   .split(';')
    //   .map(function (callback) {
    //     // return getter function
    //     return $parse(callback);
    //   });
  }


  createElementFromString(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    return template.content.firstChild;
  }

  /**
   * $compile and append the spinner template to the button.
   * @param {Object}btnEl
   */
  appendSpinnerTpl(btnEl: any) {
    // TODO add some kind of compilation later on
    btnEl.insertAdjacentHTML('beforeend', this.cfg.spinnerTpl);
  }

  /**
   * Used to limit loading state to show only for the currently
   * clicked button.
   * @param {Object}btnEl
   */
  addHandlersForCurrentBtnOnly(btnEl: any) {
    // handle current button only options via click
    if (this.cfg.addClassToCurrentBtnOnly) {
      btnEl.on(this.cfg.CLICK_EVENT, function () {
        btnEl.addClass(this.cfg.btnLoadingClass);
      });
    }

    if (this.cfg.disableCurrentBtnOnly) {
      btnEl.on(this.cfg.CLICK_EVENT, function () {
        btnEl.attr('disabled', 'disabled');
      });
    }
  }

  /**
   * Used for the function syntax of the promise button directive by
   * parsing the expressions provided by the attribute via getCallbacks().
   * Unbinds the default event handlers, which is why it might sometimes
   * be required to use the promise syntax.
   * @param {Object}eventToHandle
   * @param {String}attrToParse
   * @param {Object}btnEl
   */
  initHandlingOfViewFunctionsReturningAPromise(eventToHandle: any, attrToParse: any, btnEl: any) {
    console.log('initHandlingOfViewFunctionsReturningAPromise');

    // we need to use evalAsync here, as
    // otherwise the click or submit event
    // won't be ready to be replaced
    // scope.$evalAsync(function () {
    //   var callbacks = getCallbacks(attrs[attrToParse]);
    //
    //   // unbind original click event
    //   el.unbind(eventToHandle);
    //
    //   // rebind, but this time watching it's return value
    //   el.bind(eventToHandle, function (event) {
    //     // Make sure we run the $digest cycle
    //     scope.$apply(function () {
    //       callbacks.forEach(function (cb) {
    //         // execute function on parent scope
    //         // as we're in an isolate scope here
    //         var promise = cb(scope.$parent, {$event: event});
    //
    //         // only init watcher if not done before
    //         if (!promiseWatcher) {
    //           promiseWatcher = initPromiseWatcher(function () {
    //             return promise;
    //           }, btnEl);
    //         }
    //       });
    //     });
    //   });
    // });
  }

  /**
   * Get's all submit button children of the given element
   * @param {Object}formEl
   * @returns {Object}
   */
  getSubmitBtnChildrenForForm(formEl: any) {
    const submitBtnEls = [];
    const allButtonEls = formEl.find(this.cfg.BTN_SELECTOR);
    for (let i = 0; i < allButtonEls.length; i++) {
      const btnEl = allButtonEls[i];
      if (btnEl.getAttribute('type') === 'submit') {
        submitBtnEls.push(btnEl);
      }
    }
    return submitBtnEls;
  }

}
