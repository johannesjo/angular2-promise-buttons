import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[promiseBtn]'
})
export class PromiseBtnDirective {

  constructor(el: ElementRef) {
    el.nativeElement.innerHTML = 'xxxxxxxxxxx';
  }

}
