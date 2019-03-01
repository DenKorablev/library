import { TestBed } from '@angular/core/testing';

import { SomeApiService } from './some-api.service';

describe('SomeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SomeApiService = TestBed.get(SomeApiService);
    expect(service).toBeTruthy();
  });
});
