import {ElementRef} from '@angular/core';
import {async, TestBed} from '@angular/core/testing';
import {PromiseBtnDirective} from './promise-btn.directive';

class MockElementRef extends ElementRef {
  constructor() {
    super(null);
    this.nativeElement = {};
  }
}

describe('setup', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PromiseBtnDirective
      ],
      providers: [
        // more providers
        // {provide: ElementRef, useClass: MockElementRef}
      ]
    }).compileComponents();

    TestBed.overrideComponent(PromiseBtnDirective, {
      set: {
        template: '<button promiseBtn="testPromise">BUTTON_TEXT</button>'
      }
    });
  }));

  describe('PromiseBtnDirective', () => {
    it('should create an instance', () => {
      const directive = new PromiseBtnDirective();
      expect(directive).toBeTruthy();
    });
  });
});

