import { TestBed, inject } from '@angular/core/testing';

import { BucketListsService } from './bucket-lists.service';

describe('BucketListsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BucketListsService]
    });
  });

  it('should ...', inject([BucketListsService], (service: BucketListsService) => {
    expect(service).toBeTruthy();
  }));
});
