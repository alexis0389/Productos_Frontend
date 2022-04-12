import { environment } from './../../../../environments/environment.prod';
import { Producto } from './../../Models/producto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducto() {
    return this.http.get<Producto[]>(`${environment.urlAPI}/Producto/`)
  }
}
