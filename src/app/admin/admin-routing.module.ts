import { ProductosComponent } from './productos/productos.component';
import { SalidaDetalleComponent } from './salida-detalle/salida-detalle.component';
import { CrearSalidaComponent } from './crear-salida/crear-salida.component';
import { SalidaComponent } from './salida/salida.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path:'crearSalida',
        component: CrearSalidaComponent
      },
      {
        path: 'Salidas',
        component: SalidaComponent
      },
      {
        path: 'Salidas/Detalles/:id',
        component: SalidaDetalleComponent
      },
      {
        path: 'Productos',
        component: ProductosComponent
      },
      {
        path: 'Productos/ProductoLote/:id',
        component: ProductosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
