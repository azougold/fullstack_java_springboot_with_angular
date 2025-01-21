import { TestBed } from '@angular/core/testing';

import { HardcodedAuthentificationService } from './hardcoded-authentification.service';

describe('HardcodedAuthentificationService', () => {
  let service: HardcodedAuthentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedAuthentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
