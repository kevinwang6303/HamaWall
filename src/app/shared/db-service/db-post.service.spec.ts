import { TestBed, inject } from '@angular/core/testing';

import { DbPostService } from './db-post.service';

describe('DbPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbPostService]
    });
  });

  it('should be created', inject([DbPostService], (service: DbPostService) => {
    expect(service).toBeTruthy();
  }));
});
