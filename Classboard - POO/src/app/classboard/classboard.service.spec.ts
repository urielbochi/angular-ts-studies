import { TestBed } from '@angular/core/testing';

import { ClassboardService } from './classboard.service';

describe('ClassboardService', () => {
  let service: ClassboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
