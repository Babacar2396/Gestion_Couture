import { TestBed } from '@angular/core/testing';

import { SharedBoolService } from './shared-bool.service';

describe('SharedBoolServiceService', () => {
  let service: SharedBoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedBoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
