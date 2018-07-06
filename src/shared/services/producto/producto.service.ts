import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProductoModel } from '../../models/producto.model';

@Injectable()
export class ProductoService {
  constructor(private http: HttpClient) {}

  getProductos(): Observable<ProductoModel[]> {
    return this.http.get<ProductoModel[]>(`${environment.api_url}productos`);
  }
}