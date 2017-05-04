import { Angular2PromiseButtonModule } from '../../../src/angular2-promise-button.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Angular2PromiseButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
