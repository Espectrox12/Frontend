import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importa los módulos creados
import { LoginModule } from './auth/login.module'; // Ruta al módulo de Login
import { RegisterModule } from './auth/register.module'; // Ruta al módulo de Register
import { TaskModule } from './task/task.module'; // Ruta al módulo de Task

// Importa el componente raíz de la aplicación
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    //AppComponent, // Asegúrate de declarar el componente raíz
  ],
  imports: [
    BrowserModule,  // Necesario para todas las aplicaciones Angular
    LoginModule,    // Importa LoginModule para tener acceso al LoginComponent
    RegisterModule, // Importa RegisterModule para tener acceso al RegisterComponent
    TaskModule      // Importa TaskModule para tener acceso al TaskCreateComponent
  ],
  providers: [],
  //bootstrap: [AppComponent] // El componente principal que se usará para bootstrap
})
export class AppModule { }