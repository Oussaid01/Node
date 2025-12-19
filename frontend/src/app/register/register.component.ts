import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
     <div class="container mt-5">
    <h3 class="title">Create your <br>account</h3>
      <form #loginForm="ngForm">
        <div class="mb-3">
          <label>Username</label>
          <input type="text" class="form-control" name="username" ngModel required>
        </div>
        <div class="mb-3">
          <label>Email</label>
          <input type="email" class="form-control" name="email" ngModel required>
        </div>
        <div class="mb-3">
          <label>Password</label>
          <input type="password" class="form-control" name="password" ngModel required minlength="6">
        </div>
        <div class="mb-3">
          <label>Confirm Password</label>
          <input type="password" class="form-control" name="cpassword" ngModel required minlength="6">
        </div>
        <button class="btn btn-primary" type="submit">Register</button>
      </form>
      <img src="../assets/chef.png" alt="chefIcon" class="chefIcon">
      <img src="../assets/food2.png" alt="food1" class="food1">

      <div *ngIf="errorMessage" class="alert alert-danger mt-3">
      {{ errorMessage }}
    </div>
    </div>
  `,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errorMessage!: string | null;   
  // errorMessage = "err message"
}
