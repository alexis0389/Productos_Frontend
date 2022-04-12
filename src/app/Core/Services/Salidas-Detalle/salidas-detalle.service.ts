import { SalidasDetalle } from './../../Models/salidasDetalle.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SalidasDetalleService {

  constructor(
    private http: HttpClient
  ) { }

  getDetalles() {
    return this.http.get<SalidasDetalle>(`${environment.urlAPI}/SalidaInventarioDetalle`)
  }
}
