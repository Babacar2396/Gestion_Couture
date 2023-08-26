import { TestBed } from '@angular/core/testing';

import { ArticleventeServiceService } from './articlevente.service';

describe('ArticleventeServiceService', () => {
  let service: ArticleventeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleventeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
