import { TestBed } from '@angular/core/testing';

import { IdServiceService } from './id-service.service';

describe('IdServiceServiceService', () => {
  let service: IdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
