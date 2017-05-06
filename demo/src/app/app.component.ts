import {Component} from '@angular/core';

const STANDARD_DELAY = 1000;
const FAKE_FACT = {
  success: function () {
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
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  successPromise: Promise<any>;
  errorPromise: Promise<any>;
  endlessInitialPromise: Promise<any>;
  endlessPromise: Promise<any>;
  submitPromise: Promise<any>;
  chainedPromises: any;
  promiseIndex: number;

  constructor() {
    this.endlessInitial();
  }

  success($event: any): Promise<any> {
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
