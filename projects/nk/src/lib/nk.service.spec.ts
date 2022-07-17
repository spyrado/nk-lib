import { TestBed } from '@angular/core/testing';

import { NkService } from './nk.service';

describe('NkService', () => {
  let service: NkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
