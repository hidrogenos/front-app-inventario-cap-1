import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../shared/services/producto/producto.service';
import { ProductoModel } from '../../../shared/models/producto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'productos',
  styleUrls: ['productos.component.scss'],
  template: `
  <div class="ui-g">
  <div class="ui-g-12">
    <button pButton type="button" (click)="crearNuevoProducto()" label="Crear Nuevo Producto">  </button>
  </div>
  </div>
  <div class="ui-g">
    <div class="ui-g-12">
    <p-table [value]="productos" [lazy]="true" [loading]="loading">
    <ng-template pTemplate="header">
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Activo</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-producto>
        <tr>
            <td>{{producto.id}}</td>
            <td>{{producto.Nombre}}</td>
            <td>{{producto.Marca}}</td>
            <td>{{producto.Activo}}</td>
        </tr>
    </ng-template>
    </p-table>
    </div>
  </div>
    
    `
})
export class ProductosComponent implements OnInit {
  productos: ProductoModel[];
  loading: boolean;
  //'ProductoModule' in './../producto/producto.module'

  constructor(private productoService: ProductoService, private router :Router) {}

  ngOnInit() {

    this.getProductos().subscribe(response => (this.productos = response));
  }

  getProductos() {
    return this.productoService.getProductos();
  }

//   crearNuevoProducto(){
//       this.router.navigated(['adm-productos/nuevo']);
//   }

}
