import {NgModule} from '@angular/core';

import {PromiseBtnDirective} from './promise-btn.directive';
import {Angular2PromiseButtonComponent} from './angular2-promise-button.component';

@NgModule({
  declarations: [
    PromiseBtnDirective,
    Angular2PromiseButtonComponent,
  ],
  imports: [],
  exports: [
    PromiseBtnDirective,
    Angular2PromiseButtonComponent,
  ],
  providers: []
})
export class Angular2PromiseButtonModule {
}
