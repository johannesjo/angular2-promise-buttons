import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular2PromiseButtonsComponent } from './angular2-promise-buttons.component';

describe('Angular2PromiseButtonsComponent', () => {
  let component: Angular2PromiseButtonsComponent;
  let fixture: ComponentFixture<Angular2PromiseButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular2PromiseButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular2PromiseButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
