import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [LoginComponent,RegisterComponent],
  template: `
    <app-login ></app-login>
    <app-register style="display:none"></app-register>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
