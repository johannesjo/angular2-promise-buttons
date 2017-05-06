import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[promiseBtn]'
})
export class PromiseBtnDirective {

  constructor(el: ElementRef) {
    console.log(el);
    if (el) {
      el.nativeElement.innerHTML = 'xxxxxxxxxxx';
    }
  }
}
