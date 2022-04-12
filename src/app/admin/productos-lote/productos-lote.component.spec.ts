import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosLoteComponent } from './productos-lote.component';

describe('ProductosLoteComponent', () => {
  let component: ProductosLoteComponent;
  let fixture: ComponentFixture<ProductosLoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosLoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
