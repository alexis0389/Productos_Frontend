import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetodoPostService {

  constructor (
    private http: HttpClient
  ) { }

  postCompra(lote: any[]) {
    return this.http.post<any[]>(`${environment.urlAPI}/SalidaInventario`, lote)
  }
}
