import { TestBed } from '@angular/core/testing';

import { AccessoryToBoatService } from './accessory-to-boat.service';

describe('AccessoryToBoatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccessoryToBoatService = TestBed.get(AccessoryToBoatService);
    expect(service).toBeTruthy();
  });
});
