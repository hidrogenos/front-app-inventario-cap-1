import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


//modules

import { SharedModule } from './../shared/shared.module';

import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';


import { ProductosComponent } from '../usuario/containers/productos/productos.component';



//component

const primeNgModules = [ButtonModule, MenubarModule];

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'adm-usuarios' },
  {
    path: 'adm-usuarios',
    loadChildren: './../usuario/usuario.module#UsuarioModule'
  }
  
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    primeNgModules,
    TableModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
