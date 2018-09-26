import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSocketServiceComponent } from './rxjs-socket-service.component';

describe('RxjsSocketServiceComponent', () => {
  let component: RxjsSocketServiceComponent;
  let fixture: ComponentFixture<RxjsSocketServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsSocketServiceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSocketServiceComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
