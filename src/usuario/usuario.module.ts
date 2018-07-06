import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// containers
import * as fromContainers from './containers';

// primeng modules
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

//RUTAS

const ROUTES: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', component: fromContainers.UsuariosComponent },
  { path: 'nuevo', component: fromContainers.NuevoUsuarioComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    TableModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    CalendarModule
  ],
  declarations: [...fromContainers.containers],
  providers: []
})
export class UsuarioModule {}
