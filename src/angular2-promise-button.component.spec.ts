import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular2PromiseButtonComponent } from './angular2-promise-button.component';

describe('Angular2PromiseButtonComponent', () => {
  let component: Angular2PromiseButtonComponent;
  let fixture: ComponentFixture<Angular2PromiseButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular2PromiseButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular2PromiseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
