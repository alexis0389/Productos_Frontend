import { TestBed } from '@angular/core/testing';

import { ProductoLoteService } from './producto-lote.service';

describe('ProductoLoteService', () => {
  let service: ProductoLoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoLoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
