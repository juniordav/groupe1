import { TestBed } from '@angular/core/testing';

import { LauncheserviceService } from './launcheservice.service';

describe('LauncheserviceService', () => {
  let service: LauncheserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LauncheserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
