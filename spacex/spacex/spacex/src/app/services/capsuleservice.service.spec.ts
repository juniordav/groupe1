import { TestBed } from '@angular/core/testing';

import { CapsuleserviceService } from './capsuleservice.service';

describe('CapsuleserviceService', () => {
  let service: CapsuleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapsuleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
