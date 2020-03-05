import { TestBed } from '@angular/core/testing';

import { InformationsModelService } from './informations-model.service';

describe('InformationsModelService', () => {
  let service: InformationsModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationsModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
