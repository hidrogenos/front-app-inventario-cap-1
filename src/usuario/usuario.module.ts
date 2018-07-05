import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// containers
import * as fromContainers from './containers';

// primeng modules
import { TableModule } from 'primeng/table';

//RUTAS

const ROUTES: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', component: fromContainers.UsuariosComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), TableModule],
  declarations: [...fromContainers.containers],
  providers: []
})
export class UsuarioModule {}
