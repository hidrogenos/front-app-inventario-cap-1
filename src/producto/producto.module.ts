import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// containers
import * as fromContainers from './containers';

// primeng modules
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

//RUTAS

const ROUTES: Routes = [
  { path: '', redirectTo: 'listaproducto', pathMatch: 'full' },
  { path: 'listaproducto', component: fromContainers.ProductosComponent },
  //{ path: 'nuevo', component: fromContainers.NuevoProductosComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), TableModule,ButtonModule],
  declarations: [...fromContainers.containers],
  providers: []
})

export class ProductoModule {}
