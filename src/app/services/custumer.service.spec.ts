import { TestBed } from '@angular/core/testing';

import { CustumerService } from './custumer.service';

describe('CustumerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustumerService = TestBed.get(CustumerService);
    expect(service).toBeTruthy();
  });
});
