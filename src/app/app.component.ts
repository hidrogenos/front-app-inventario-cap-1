import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div>
      app component
      <button pButton type="button" label="Click" ></button>
    </div>
  `
})
export class AppComponent {
  title = 'app';
}
