import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component'; // Importa LoginComponent
import { FormsModule } from '@angular/forms';        // Importa FormsModule

@NgModule({
  declarations: [
    LoginComponent  // Declara LoginComponent aquí
  ],
  imports: [
    CommonModule,  // Importa CommonModule para funcionalidades básicas
    FormsModule    // Importa FormsModule para usar [(ngModel)]
  ],
  exports: [
    LoginComponent  // Exporta LoginComponent para que pueda ser utilizado fuera del módulo si es necesario
  ]
})
export class LoginModule { }