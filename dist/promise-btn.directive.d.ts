import { AfterContentInit, ElementRef, OnDestroy } from '@angular/core';
import { PromiseBtnConfig } from './promise-btn-config';
export declare class PromiseBtnDirective implements OnDestroy, AfterContentInit {
    cfg: PromiseBtnConfig;
    minDurationTimeout: number;
    isMinDurationTimeoutDone: boolean;
    isPromiseDone: boolean;
    btnEl: HTMLElement;
    promise: any;
    constructor(el: ElementRef, userCfg: PromiseBtnConfig);
    promiseBtn: any;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /**
     * Initializes all html and event handlers
     * @param {Object}btnEl
     */
    prepareBtnEl(btnEl: HTMLElement): void;
    /**
     * Checks if all required parameters are there and inits the promise handler
     * @param {Object}btnEl
     */
    checkAndInitPromiseHandler(btnEl: HTMLElement): void;
    /**
     * Helper FN to add class
     * @param {Object}el
     */
    addLoadingClass(el: any): void;
    /**
     * Helper FN to remove classes
     * @param {Object}el
     */
    removeLoadingClass(el: any): void;
    /**
     * Handles everything to be triggered when the button is set
     * to loading state.
     * @param {Object}btnEl
     */
    initLoadingState(btnEl: HTMLElement): void;
    /**
     * Handles everything to be triggered when loading is finished
     * @param {Object}btnEl
     */
    cancelLoadingStateIfPromiseAndMinDurationDone(btnEl: HTMLElement): void;
    /**
     * @param {Object}btnEl
     */
    disableBtn(btnEl: HTMLElement): void;
    /**
     * @param {Object}btnEl
     */
    enableBtn(btnEl: HTMLElement): void;
    /**
     * Initializes a watcher for the promise. Also takes
     * this.cfg.minDuration into account if given.
     * @param {Object}btnEl
     */
    initPromiseHandler(btnEl: HTMLElement): void;
    /**
     * $compile and append the spinner template to the button.
     * @param {Object}btnEl
     */
    appendSpinnerTpl(btnEl: HTMLElement): void;
    /**
     * Limit loading state to show only for the currently clicked button.
     * Executed only if this.cfg.handleCurrentBtnOnly is set
     */
    handleCurrentBtnOnly(): boolean;
}
