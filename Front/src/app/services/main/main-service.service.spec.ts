import { TestBed } from '@angular/core/testing';

import { MainService } from './main.service';

describe('MainService', () => {
  let service: MainService<any>; 

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
