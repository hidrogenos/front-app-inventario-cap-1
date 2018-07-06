import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../shared/services/usuario/usuario.service';
import { UsuarioModel } from '../../../shared/models/usuario.model';

import { Router } from '@angular/router';

@Component({
  selector: 'usuarios',
  styleUrls: ['usuarios.component.scss'],

  template: `
    <div class="ui-g">
        <div class="ui-g-12 text-aling-right">
            <button pButton type="button" (click)="crearNuevoUsuario()" label="Crear nuevo usuario"></button>
        </div>
    </div>
    <div class="ui-g">
        <div class="ui-g-12">
            <p-table [value]="usuarios" [lazy]="true" [loading]="loading">
                <ng-template pTemplate="header">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Cedula</th>
                        <th>Activo</th>
                        <th>Fecha nacimiento</th>
                        <th>Acciones</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-usuario>
                    <tr>
                        <td>{{ usuario.id }}</td>
                        <td>{{ usuario.nombre }}</td>
                        <td>{{ usuario.cedula }}</td>
                        <td>{{ usuario.activo }}</td>
                        <td>{{ usuario.fecha_nacimiento | date }}</td>
                        <td>
                            <button pButton type="button" (click)="onEliminar(usuario)" class="ui-button-danger" icon="pi pi-trash" ></button>
                        </td>
                    </tr>
                </ng-template>
                </p-table>
        </div>

    </div>
    
    `
})
export class UsuariosComponent implements OnInit {
  loading: boolean;
  usuarios: UsuarioModel[];

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {
    this.loading = true;
    this.getUsuarios().subscribe(response => {
      this.usuarios = response;
      this.loading = false;
    });
  }

  crearNuevoUsuario() {
    this.router.navigate(['adm-usuarios/nuevo']);
  }

  onEliminar(usuario) {
    console.log('eliminar el usuario', usuario);
  }

  getUsuarios() {
    return this.usuarioService.getUsuarios();
  }
  crearNuevoUsuario(){
    
  }
}
