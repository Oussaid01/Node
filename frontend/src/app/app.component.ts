import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
  imports: [LoginComponent, RouterModule],
})
export class AppComponent {
  title = 'homes';
}
