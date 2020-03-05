import { TestBed } from '@angular/core/testing';

import { EventAitpService } from './event-aitp.service';

describe('EventAitpService', () => {
  let service: EventAitpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventAitpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
