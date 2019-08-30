<p align="center"><img src="logo.png"></p>
<p align="center>
          
<p align="center"><a href="https://badge.fury.io/js/angular2-promise-buttons" rel="nofollow"><img src="https://camo.githubusercontent.com/5e39de25cca817826da9e93cdce01f16bc499695/68747470733a2f2f62616467652e667572792e696f2f6a732f616e67756c6172322d70726f6d6973652d627574746f6e732e737667" alt="npm version" data-canonical-src="https://badge.fury.io/js/angular2-promise-buttons.svg" style="max-width:100%;"></a>
<a href="https://travis-ci.org/johannesjo/angular2-promise-buttons?branch=master" rel="nofollow"><img src="https://camo.githubusercontent.com/849a28d2647af8a0fe2a8d47b860d638f5421948/68747470733a2f2f7472617669732d63692e6f72672f6a6f68616e6e65736a6f2f616e67756c6172322d70726f6d6973652d627574746f6e732e737667" alt="Build Status" data-canonical-src="https://travis-ci.org/johannesjo/angular2-promise-buttons.svg" style="max-width:100%;"></a>
<a href="https://coveralls.io/github/johannesjo/angular2-promise-buttons?branch=master" rel="nofollow"><img src="https://camo.githubusercontent.com/80cb53bf16882ebc70866dffd299edfa741b26e9/68747470733a2f2f636f766572616c6c732e696f2f7265706f732f6769746875622f6a6f68616e6e65736a6f2f616e67756c6172322d70726f6d6973652d627574746f6e732f62616467652e7376673f6272616e63683d6d6173746572" alt="Coverage Status" data-canonical-src="https://coveralls.io/repos/github/johannesjo/angular2-promise-buttons/badge.svg?branch=master" style="max-width:100%;"></a></p>

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
