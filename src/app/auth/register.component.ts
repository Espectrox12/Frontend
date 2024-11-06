import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  rol: string = 'user';  // Asumimos que el rol por defecto es 'user'
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.name, this.email, this.password, this.rol).subscribe({
      next: (response) => {
        this.router.navigate(['/login']);  // Redirigir al login después de registro exitoso
      },
      error: (error) => {
        this.errorMessage = 'Error al registrar usuario';
      }
    });
  }
}
