import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../shared/services/usuario/usuario.service';
import { UsuarioModel } from '../../../shared/models/usuario.model';

@Component({
  selector: 'usuarios',
  styleUrls: ['usuarios.component.scss'],
  template: `
    <p-table [value]="usuarios">
        <ng-template pTemplate="header">
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Cedula</th>
                <th>Activo</th>
                <th>Fecha nacimiento</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-usuario>
            <tr>
                <td>{{usuario.id}}</td>
                <td>{{usuario.nombre}}</td>
                <td>{{usuario.cedula}}</td>
                <td>{{usuario.activo}}</td>
                <td>{{usuario.fecha_nacimiento | date}}</td>
            </tr>
        </ng-template>
        </p-table>
    `
})
export class UsuariosComponent implements OnInit {
  usuarios: UsuarioModel[];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.getUsuarios().subscribe(response => (this.usuarios = response));
  }

  getUsuarios() {
    return this.usuarioService.getUsuarios();
  }
}
