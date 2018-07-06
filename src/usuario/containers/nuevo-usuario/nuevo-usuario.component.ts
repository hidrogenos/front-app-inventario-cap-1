import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../../shared/services';
import { UsuarioModel } from '../../../shared/models/usuario.model';

import { Router } from '@angular/router';

@Component({
  selector: 'nuevo-usuario',
  styleUrls: ['nuevo-usuario.component.scss'],
  template: `
        <div class="ui-g">
            <div class="ui-g-12">
                <h1>Creción de nuevo usuario</h1>
            </div>
        </div>
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <div class="ui-g">
                <div class="ui-g-3 ui-fluid">
                    <div>
                        <label>Nombre:</label>
                    </div>
                    <input type="text" pInputText formControlName="nombre"/>
                </div>
                <div class="ui-g-3 ui-fluid">
                    <div>
                        <label>Cedula:</label>
                    </div>
                    <input type="number" pInputText formControlName="cedula"/>
                </div>
                <div class="ui-g-3 ui-fluid">
                    <div>
                        <label>Fecha nacimiento:</label>
                    </div>
                    <p-calendar formControlName="fecha_nacimiento" [showIcon]="true"></p-calendar>
                </div>
            </div>
            <div class="ui-g">
                <div class="ui-g-9 ui-fluid">
                    <button pButton type="submit" label="Crear" [disabled]="!form.valid"></button>
                </div>
            </div>
        </form>
        <pre>{{ form.value | json }}</pre>
    `
})
export class NuevoUsuarioComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      cedula: ['', Validators.required],
      activo: [true, Validators.required],
      fecha_nacimiento: [new Date(), Validators.required]
    });
  }

  onSubmit() {
    console.log(this.form.value);

    const usuario: UsuarioModel = {
      nombre: this.form.value.nombre,
      cedula: this.form.value.cedula,
      activo: this.form.value.activo,
      fecha_nacimiento:
        (this.form.value.fecha_nacimiento as Date).valueOf() / 1000
    };

    this.usuarioService.createUsuario(usuario).subscribe(response => {
      alert('Usuario creado exitosamente');
      this.router.navigate(['adm-usuarios/lista']);
    });
  }
}
