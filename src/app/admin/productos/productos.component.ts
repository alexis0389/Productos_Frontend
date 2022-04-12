import { ProductoService } from './../../Core/Services/Producto/producto.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  searchField: any;
  clearSearchField() {
    this.searchField = ''
  }
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['productoId', 'nombre', 'total', 'Lotes'];

  constructor(
    private productoServices: ProductoService
  ) {

  }
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.buscarLote();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  buscarLote() {
    console.log(this.searchField)
    this.productoServices.getAllProducto()
    .subscribe((response: any) => {
      this.dataSource.data = response;
    })
  }

}
