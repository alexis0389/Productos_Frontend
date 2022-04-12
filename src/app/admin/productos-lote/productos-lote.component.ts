import { ProductoLoteService } from './../../Core/Services/ProductoLote/producto-lote.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-productos-lote',
  templateUrl: './productos-lote.component.html',
  styleUrls: ['./productos-lote.component.scss']
})
export class ProductosLoteComponent implements OnInit {
  searchField: any;
  clearSearchField() {
    this.searchField = ''
  }

  displayedColumns = ['loteId', 'productoId', 'fecha_cad', 'cantidad', 'costo'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private productoLoteServices: ProductoLoteService,
    private _location: Location,
  ) {
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
      this.mostrarLote();
  }

  mostrarLote() {
    this.productoLoteServices.getAllLote()
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
