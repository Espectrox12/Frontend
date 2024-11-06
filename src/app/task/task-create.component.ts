import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';  // Asegúrate de importar el servicio de autenticación
import { TasksService } from './tasks.service'; // Asegúrate de importar el servicio de tareas
import { Task } from './task.model'; // Asegúrate de importar el modelo de tarea

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: []
})
export class TaskCreateComponent {
  nametask: string = '';
  statustasks: string = 'Pending';  // Estado predeterminado

  constructor(
    private tasksService: TasksService,
    private authService: AuthService,  // Servicio de autenticación para obtener el usuario logueado
    private router: Router
  ) {}

  createTask() {
    // Obtener el usuario logueado desde AuthService
    const currentUser = this.authService.currentUserValue;

    if (!currentUser) {
      // Si no hay usuario logueado, redirige al login o muestra un error
      console.error('No se ha encontrado un usuario logueado');
      this.router.navigate(['/login']);
      return;
    }

    // Crear la nueva tarea
    const newTask: Task = {
      nametask: this.nametask,
      statustasks: this.statustasks,
      user: {
        id: currentUser.id,   // Asigna el id del usuario logueado
        name: currentUser.name,
        email: currentUser.email
      }
    };

    // Llamar al servicio de tareas para crear la tarea
    this.tasksService.createTask(newTask).subscribe(() => {
      // Redirigir a la lista de tareas después de crearla
      this.router.navigate(['/tasks']);
    });
  }
}
