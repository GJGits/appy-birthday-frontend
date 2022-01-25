import { TestBed } from '@angular/core/testing';

import { ApiProdService } from './api-prod.service';

describe('ApiProdService', () => {
  let service: ApiProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
