import {NgModule} from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import {PromiseBtnDirective} from './promise-btn.directive';
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
  static forRoot(userCfgPassedByUser?: any): ModuleWithProviders {
    // NOTE: this is never allowed to contain any conditional logic
    return {
      ngModule: Angular2PromiseButtonModule,
      providers: [{provide: userCfg, useValue: userCfgPassedByUser}]
    };
  }
}
