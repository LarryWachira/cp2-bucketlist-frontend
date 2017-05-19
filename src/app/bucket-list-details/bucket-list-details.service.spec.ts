import { TestBed, inject } from '@angular/core/testing';

import { BucketListDetailsService } from './bucket-list-details.service';

describe('BucketListDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BucketListDetailsService]
    });
  });

  it('should ...', inject([BucketListDetailsService], (service: BucketListDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
