import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCreateComponent } from './task-create.component'; // Importa TaskCreateComponent
import { FormsModule } from '@angular/forms'; // Importa FormsModule para usar ngModel

@NgModule({
  declarations: [
    TaskCreateComponent // Declara TaskCreateComponent aquí
  ],
  imports: [
    CommonModule, // Importa CommonModule para funcionalidades básicas de Angular
    FormsModule    // Importa FormsModule para usar [(ngModel)] en formularios
  ],
  exports: [
    TaskCreateComponent // Exporta TaskCreateComponent si lo necesitas en otros módulos
  ]
})
export class TaskModule { }