import { TestBed } from '@angular/core/testing';

import { LegoDataService } from './lego-data.service';

describe('LegoDataService', () => {
  let service: LegoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
