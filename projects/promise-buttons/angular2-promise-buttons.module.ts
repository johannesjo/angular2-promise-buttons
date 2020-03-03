import {ModuleWithProviders, NgModule} from '@angular/core';
import {PromiseBtnDirective} from './promise-btn.directive';
import {PromiseBtnConfig} from './promise-btn-config';
import {userCfg} from './user-cfg';

@NgModule({
  declarations: [
    PromiseBtnDirective,
  ],
  imports: [],
  exports: [
    PromiseBtnDirective,
  ],
  providers: []
})
export class Angular2PromiseButtonModule {
  // add forRoot to make it configurable
  static forRoot(config?: PromiseBtnConfig): ModuleWithProviders<Angular2PromiseButtonModule> {
    // NOTE: this is never allowed to contain any conditional logic
    return {
      ngModule: Angular2PromiseButtonModule,
      providers: [{provide: userCfg, useValue: config}]
    };
  }
}
