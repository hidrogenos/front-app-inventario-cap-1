import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UsuarioModel } from '../../models/usuario.model';

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(`${environment.api_url}usuarios`).pipe(
      map(response => {
        return response.map(usuario => {
          return {
            ...usuario,
            fecha_nacimiento: usuario.fecha_nacimiento * 1000
          };
        });
      }),
      catchError((error: any) => Observable.throw(error.json()))
    );
  }

  createUsuario(data: UsuarioModel): Observable<UsuarioModel> {
    return this.http
      .post<UsuarioModel>(`${environment.api_url}usuarios`, data)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
