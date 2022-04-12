import { TestBed } from '@angular/core/testing';

import { MetodoPostService } from './metodo-post.service';

describe('MetodoPostService', () => {
  let service: MetodoPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetodoPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
