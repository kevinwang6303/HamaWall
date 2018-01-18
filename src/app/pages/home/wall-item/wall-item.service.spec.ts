import { TestBed, inject } from '@angular/core/testing';

import { WallItemService } from './wall-item.service';

describe('WallItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WallItemService]
    });
  });

  it('should be created', inject([WallItemService], (service: WallItemService) => {
    expect(service).toBeTruthy();
  }));
});
