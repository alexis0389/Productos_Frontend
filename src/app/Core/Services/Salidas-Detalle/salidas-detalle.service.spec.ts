import { TestBed } from '@angular/core/testing';

import { SalidasDetalleService } from './salidas-detalle.service';

describe('SalidasDetalleService', () => {
  let service: SalidasDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalidasDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
