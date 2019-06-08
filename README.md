[![npm version](https://badge.fury.io/js/angular2-promise-buttons.svg)](https://badge.fury.io/js/angular2-promise-buttons)
[![Build Status](https://travis-ci.org/johannesjo/angular2-promise-buttons.svg)](https://travis-ci.org/johannesjo/angular2-promise-buttons?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/johannesjo/angular2-promise-buttons/badge.svg?branch=master)](https://coveralls.io/github/johannesjo/angular2-promise-buttons?branch=master)

angular2-promise-buttons
===========

*Chilled Buttons for Angular2*

For angular 1.x version [go here](https://github.com/johannesjo/angular-promise-buttons).

*angular2-promise-buttons* is a simple module that let's you add a loading indicator to a button of your choice.  Check out the [demo](http://johannesjo.github.io/angular2-promise-buttons/#demo)!

[Bug-reports or feature request](https://github.com/johannesjo/angular2-promise-buttons/issues) as well as any other kind of **feedback is highly welcome!**

## Getting started
Install it via npm:
```
npm install angular2-promise-buttons -S
```

And add it as a dependency to your main module
```typescript
import {Angular2PromiseButtonModule} from 'angular2-promise-buttons/dist';

@NgModule({
  imports: [
    Angular2PromiseButtonModule.forRoot(),
  ],
})
export class MainAppModule {
}
```
Using the buttons is easy. Just pass a promise to the directive:
```html
<button (click)="someAction()" 
   [promiseBtn]="promiseSetBySomeAction">Click me to spin!</button>
```
```typescript
export class SomeComponent {
    // some example async action, but this works with any promise
    someAction(){
      this.promiseSetBySomeAction = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
      });
    }
}

```

## Styling the button
To give you maximum flexibility there are no base styles coming with the directive, but it is easy to fix that! There are lots of free css-spinners out there. Just find one of your liking and add the css to your global stylesheet.

**Ressources:**
* http://cssload.net/
* http://projects.lukehaas.me/css-loaders/
* http://tobiasahlin.com/spinkit/

There are selectors you can use to style. There is the `.is-loading` class on the button, which is set, when the promise is pending and there is the `<span class="btn-spinner"></span>` element inside the button.


## Configuration
Configuration is done via the forRoot method of the promise button module:
```typescript
import {Angular2PromiseButtonModule} from 'angular2-promise-buttons';

@NgModule({
  imports: [
    Angular2PromiseButtonModule
      .forRoot({
        // your custom config goes here
        spinnerTpl: '<span class="btn-spinner"></span>',
        // disable buttons when promise is pending
        disableBtn: true,
        // the class used to indicate a pending promise
        btnLoadingClass: 'is-loading',
        // only disable and show is-loading class for clicked button, 
        // even when they share the same promise
        handleCurrentBtnOnly: false,
      }),
  ],
})
export class MainAppModule {
}
```

## Using observables
When you're using the module with observables make sure to pass a subscription to the directive rather than an observable directly.
```typescript
const FAKE_FACTORY = {
  initObservable: (): Observable<number> => {
    return new Observable(observer => {
      setTimeout(() => {
        observer.complete();
      }, 4000);
    });
  } 
};

// DO:
const observable = FAKE_FACTORY.initObservable();
this.passedToDirective = observable.subscribe(
// ...
);
  
// DON'T DO:
const observable = FAKE_FACTORY.initObservable();
this.passedToDirective = observable;

```

## Using booleans
Is now also possible.
```html
<button (click)="someAction()" 
   [promiseBtn]="isShowBoolean">Click!</button>
```
## Contributing
Contribution guidelines: [CONTRIBUTING.md](https://github.com/johannesjo/angular2-promise-buttons/blob/master/CONTRIBUTING.md)
