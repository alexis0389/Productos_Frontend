import { MetodoPostService } from './Services/metodoPost/metodo-post.service';
import { ProductoLoteService } from './Services/ProductoLote/producto-lote.service';
import { SalidasService } from './Services/Salidas/salidas.service';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SalidasService,
    ProductoLoteService,
    MetodoPostService
  ]
})
export class CoreModule {}
