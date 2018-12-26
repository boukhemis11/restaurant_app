import { TestBed } from '@angular/core/testing';

import { QuichLunchService } from './quich-lunch.service';

describe('QuichLunchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuichLunchService = TestBed.get(QuichLunchService);
    expect(service).toBeTruthy();
  });
});
