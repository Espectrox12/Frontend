import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component'; // Importa RegisterComponent
import { FormsModule } from '@angular/forms'; // Importa FormsModule para usar ngModel

@NgModule({
  declarations: [
    RegisterComponent // Declara RegisterComponent aquí
  ],
  imports: [
    CommonModule, // Importa CommonModule para funcionalidades básicas de Angular
    FormsModule    // Importa FormsModule para usar [(ngModel)] en formularios
  ],
  exports: [
    RegisterComponent // Exporta RegisterComponent si lo necesitas en otros módulos
  ]
})
export class RegisterModule { }