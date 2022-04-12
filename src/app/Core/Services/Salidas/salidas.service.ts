import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Salida } from '../../Models/salidas.model';

@Injectable({
  providedIn: 'root'
})
export class SalidasService {

  constructor(
    private http: HttpClient
  ) { }

  getAllSalidas() {
    return this.http.get<Salida[]>(`${environment.urlAPI}/SalidaInventario`);
  }

  getSalida(id: number) {
    return this.http.get<Salida>(`${environment.urlAPI}/SalidaInventario/${id}`)
  }
}
