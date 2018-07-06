import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div>
      <div style="margin-bottom: 10px;">
        <p-menubar [model]="items">
        </p-menubar>
      </div>
          
      <router-outlet>
        </router-outlet>
    </div>
  `
})
export class AppComponent {
  items: MenuItem[] = [
    {
      label: 'Usuario',
      icon: 'fa fa-fw fa-user',
      routerLink: 'adm-usuarios'
    },
    {
      label: 'Edit',
      icon: 'fa fa-fw fa-edit',
      items: [
        { label: 'Undo', icon: 'fa fa-fw fa-mail-forward' },
        { label: 'Redo', icon: 'fa fa-fw fa-mail-reply' }
      ]
    },
    {
      label: 'Help',
      icon: 'fa fa-fw fa-question',
      items: [
        {
          label: 'Contents'
        },
        {
          label: 'Search',
          icon: 'fa fa-fw fa-search',
          items: [
            {
              label: 'Text',
              items: [
                {
                  label: 'Workspace'
                }
              ]
            },
            {
              label: 'File'
            }
          ]
        }
      ]
    },
    {
      label: 'Actions',
      icon: 'fa fa-fw fa-gear',
      items: [
        {
          label: 'Edit',
          icon: 'fa fa-fw fa-refresh',
          items: [
            { label: 'Save', icon: 'fa fa-fw fa-save' },
            { label: 'Update', icon: 'fa fa-fw fa-save' }
          ]
        },
        {
          label: 'Other',
          icon: 'fa fa-fw fa-phone',
          items: [{ label: 'Delete', icon: 'fa fa-fw fa-minus' }]
        }
      ]
    },
    {
      label: 'Quit',
      icon: 'fa fa-fw fa-minus'
    }
  ];
}
