import { TestBed, inject } from '@angular/core/testing';

import { PostItemService } from './post-item.service';

describe('PostItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostItemService]
    });
  });

  it('should be created', inject([PostItemService], (service: PostItemService) => {
    expect(service).toBeTruthy();
  }));
});
