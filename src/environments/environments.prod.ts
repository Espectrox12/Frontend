export const environment = {
    production: true,            // Indica que este es un entorno de producción
    apiUrl: 'https://api.miproyecto.com/api', // URL de la API para el entorno de producción
    appVersion: '1.0.0',         // Versión de la aplicación para producción
    firebaseConfig: {            // Ejemplo de configuración de Firebase en producción
      apiKey: 'prod-api-key',
      authDomain: 'prod-project.firebaseapp.com',
      projectId: 'prod-project-id',
      storageBucket: 'prod-project.appspot.com',
      messagingSenderId: 'prod-messaging-sender-id',
      appId: 'prod-app-id',
    }
  };