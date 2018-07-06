import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../../../shared/models/producto.model';
import { ProductoService } from '../../../shared/services/producto/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: any;

  constructor(private serviceProducto: ProductoService) {} 
   

  ngOnInit() {
    this.serviceProducto.getProductos().subscribe(Response => {
      this.productos = Response
    } )

  }
}

