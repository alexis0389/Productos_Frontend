import { SalidasDetalle } from './../../Core/Models/salidasDetalle.model';
import { SalidasDetalleService } from './../../Core/Services/Salidas-Detalle/salidas-detalle.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-salida-detalle',
  templateUrl: './salida-detalle.component.html',
  styleUrls: ['./salida-detalle.component.scss']
})
export class SalidaDetalleComponent implements OnInit {
  searchField: any;
  clearSearchField() {
    this.searchField = ''
  }

  displayedColumns = ['salidaDetalleId', 'salidaEncabezadoId', 'loteId', 'productoId', 'cantidad', 'costo', 'saldo_Actual'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private salidaDetalleService: SalidasDetalleService,
    private _location: Location,
  ) {
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
      this.mostrarDetalle();
  }

  mostrarDetalle() {
    this.salidaDetalleService.getDetalles()
    .subscribe((response: any) => {
      this.dataSource.data = response;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  atras() {
    this._location.back();
  }
}
