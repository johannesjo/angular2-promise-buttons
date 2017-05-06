import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  initialPromise: Promise<any>;
  onClickPromise: Promise<any>;

  constructor() {
    this.initialPromise = new Promise((fulfill, reject) => {
      setTimeout(fulfill, 99999999);
    });
  }

  onClick() {
    this.onClickPromise = new Promise((fulfill, reject) => {
      setTimeout(fulfill, 3000);
    });
  }
}
