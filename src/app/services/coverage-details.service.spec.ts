import { TestBed } from '@angular/core/testing';

import { CoverageDetailsService } from './coverage-details.service';

describe('CoverageDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoverageDetailsService = TestBed.get(CoverageDetailsService);
    expect(service).toBeTruthy();
  });
});
