import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

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
  },
  initObservable: (): Observable<number> => {
    return new Observable(observer => {
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
  observableItem: Observable<any>;
  chainedPromises: any;
  promiseIndex: number;
  obsVal: any;

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

  initObservable() {
    this.obsVal = 'INITIALIZED';
    this.observableItem = FAKE_FACT.initObservable();
    this.observableItem.subscribe(
      (value: number) => {
        this.obsVal = value;
      },
      () => {},
      () => {
        this.obsVal = 'COMPLETED';
      }
    );
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
