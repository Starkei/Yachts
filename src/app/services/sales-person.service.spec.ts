import { TestBed } from '@angular/core/testing';

import { SalesPersonService } from './sales-person.service';

describe('SalesPersonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesPersonService = TestBed.get(SalesPersonService);
    expect(service).toBeTruthy();
  });
});
