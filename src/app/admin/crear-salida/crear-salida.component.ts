import { MetodoPostService } from './../../Core/Services/metodoPost/metodo-post.service';
import { ProductoLoteService } from './../../Core/Services/ProductoLote/producto-lote.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-crear-salida',
  templateUrl: './crear-salida.component.html',
  styleUrls: ['./crear-salida.component.scss']
})
export class CrearSalidaComponent implements OnInit {
  searchField: any;
  clearSearchField() {
    this.searchField = ''
  }
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['loteId', 'productoId', 'cantidad', 'costo', 'action'];

  constructor(
    private productoLoteServices: ProductoLoteService,
    private metodoPostService: MetodoPostService
  ) {

  }
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  buscarProducto() {
    console.log(this.searchField)
    this.productoLoteServices.getProductoLote(this.searchField)
    .subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(this.dataSource.data)
      console.log(response)
    })
  }

  crearSalida() {
    console.log(this.dataSource.data)
    this.dataSource.data.forEach((lote: any) => {
      if (lote.retiro < 0)
      {
        lote.retiro = 0;
        return;
      }
      if (lote.retiro > lote.cantidad)
      {
        alert("La cantidad de retiro es mayor a la existencia del Lote:  "+ lote.loteId)
        return;
      }
    });
    let data = this.dataSource.data.map((lote: any) => {
      return {
        loteId: lote.loteId,
        productoId: lote.productoId,
        cantidad: lote.retiro
      }
    })
    this.metodoPostService.postCompra(data)
    .subscribe((response) => {
      alert("salida exitosa");
    })
  }
}
