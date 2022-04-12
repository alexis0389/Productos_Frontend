import { environment } from './../../../../environments/environment';
import { ProductoLote } from './../../Models/productoLote.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoLoteService {

  constructor(
    private http: HttpClient
  ) { }

  getAllLote() {
    return this.http.get<ProductoLote[]>(`${environment.urlAPI}/ProductoLote`)
  }

  getProductoLote(id: number) {
    return this.http.get<ProductoLote[]>(`${environment.urlAPI}/ProductoLote/${id}`)
  }
}
