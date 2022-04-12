import { SalidasService } from './../../Core/Services/Salidas/salidas.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.scss']
})
export class SalidaComponent implements OnInit {
  searchField: any;
  clearSearchField() {
    this.searchField = ''
  }
  displayedColumns = ['salidaEncabezadoId', 'fecha_Salida', 'detalle'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private salidasService: SalidasService
  ) {

  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.ObtenerSalida();
  }

  ObtenerSalida() {
    this.salidasService.getAllSalidas()
    .subscribe((response: any) => {
      this.dataSource.data = response
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  buscarEncabezado() {
    console.log(this.searchField)
    this.salidasService.getAllSalidas()
    .subscribe((response: any) => {
      this.dataSource.data = response;
    })
  }
}
