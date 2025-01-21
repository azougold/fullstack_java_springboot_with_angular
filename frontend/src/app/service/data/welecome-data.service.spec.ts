import { TestBed } from '@angular/core/testing';

import { WelecomeDataService } from './welecome-data.service';

describe('WelecomeDataService', () => {
  let service: WelecomeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelecomeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
