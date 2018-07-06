import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../shared/services/producto/producto.service';
import { ProductoModel } from '../../../shared/models/producto.model';

@Component({
  selector: 'productos',
  styleUrls: ['productos.component.scss'],
  template: `
    <p-table [value]="productos">
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
    `
})
export class ProductosComponent implements OnInit {
  productos: ProductoModel[];
  //'ProductoModule' in './../producto/producto.module'

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.getProductos().subscribe(response => (this.productos = response));
  }

  getProductos() {
    return this.productoService.getProductos();
  }
}
