import { TestBed } from '@angular/core/testing';

import { InformationsAitpService } from './informations-aitp.service';

describe('InformationsAitpService', () => {
  let service: InformationsAitpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationsAitpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
