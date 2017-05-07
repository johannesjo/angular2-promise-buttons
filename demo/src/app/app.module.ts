import {Angular2PromiseButtonModule} from './component-symlink/index';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Angular2PromiseButtonModule
      .forRoot(
        // {disableBtn: false}
      ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
