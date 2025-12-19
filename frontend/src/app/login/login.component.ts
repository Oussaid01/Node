import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  template: `
    <div class="container mt-5">
    <h3 class="title">Log in to your <br>account</h3>
      <form #loginForm="ngForm">
        <div class="mb-3">
          <label>Username</label>
          <input type="text" class="form-control" name="username" ngModel required>
        </div>
        <div class="mb-3">
          <label>Password</label>
          <input type="password" class="form-control" name="password" ngModel required minlength="6">
        </div>
        <button class="btn btn-primary" type="submit">Log In</button>
      </form>
      <img src="../assets/chef.png" alt="chefIcon" class="chefIcon">
      <img src="../assets/food2.png" alt="food1" class="food1">

      
      <p class="registerLink">Don't Have An Account?</p>
      <p class="resetPassLink">Reset Password?</p>

      <div *ngIf="errorMessage" class="alert alert-danger mt-3">
      {{ errorMessage }}
    </div>
    </div>
  `,
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  errorMessage!: string | null;   
  // errorMessage = "err message"
  constructor() {}
}
