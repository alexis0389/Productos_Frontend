import { SalidaDetalleComponent } from './salida-detalle/salida-detalle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../Material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './nav/nav.component';
import { SalidaComponent } from './salida/salida.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CrearSalidaComponent } from './crear-salida/crear-salida.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosLoteComponent } from './productos-lote/productos-lote.component';


@NgModule({
  declarations: [
    NavComponent,
    SalidaComponent,
    CrearSalidaComponent,
    SalidaDetalleComponent,
    ProductosComponent,
    ProductosLoteComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    LayoutModule,
  ]
})
export class AdminModule { }
