import { TestBed } from '@angular/core/testing';

import { RxjsSocketServiceService } from './rxjs-socket-service.service';

describe('RxjsSocketServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxjsSocketServiceService = TestBed.get(RxjsSocketServiceService);
    expect(service).toBeTruthy();
  });
});
