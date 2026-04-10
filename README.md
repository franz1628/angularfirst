# AngularFirst - Sistema de Gestión Empresarial

AngularFirst es una plataforma de gestión moderna y robusta construida con Angular 17, diseñada para ofrecer una experiencia de usuario premium con un enfoque en la reactividad, el diseño limpio y la escalabilidad.

## ✨ Características Principales

El sistema está estructurado modularmente para facilitar su mantenimiento y expansión:

- **🔐 Autenticación**: Sistema completo de inicio de sesión con validación y seguridad.
- **🏷️ Gestión de Marcas**: Registro y mantenimiento de marcas de vehículos, incluyendo carga de logotipos.
- **📄 Tipos de Documentos**: Administración dinámicas de formatos y documentos necesarios para el flujo de trabajo.
- **👥 Gestión de Personas**: Módulo centralizado para el manejo de propietarios y clientes.
- **🛠️ Catálogo de Servicios**: Gestión integral de servicios ofrecidos por la plataforma.
- **🎨 Diseño Premium**: Interfaz moderna utilizando las mejores prácticas de UI/UX, componentes reactivos y micro-animaciones.

## 🚀 Instalación y Configuración

### Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- [Angular CLI](https://github.com/angular/angular-cli) versión 17.0.0

### Pasos para el despliegue local

1. **Clonar el repositorio:**
   ```bash
   git clone [url-del-repositorio]
   cd angularfirst
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar entorno:**
   Verifica la configuración del API en `src/environments/environment.ts`. Por defecto, intenta conectarse a `http://localhost:3000`.

4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm start
   ```
   Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias algún archivo fuente.

## 🛠️ Stack Tecnológico

- **Framework**: Angular 17
- **Lenguaje**: TypeScript
- **Estilos**: Vanilla CSS con principios de diseño moderno.
- **Estado**: RxJS para manejo de flujos asíncronos y estado reactivo.
- **Utilidades**: UUID para generación de identificadores únicos.

## 📂 Estructura del Proyecto

```text
src/app/
├── core/           # Servicios globales, guards e interceptores
├── shared/         # Componentes, pipes y directivas compartidas
└── features/       # Módulos funcionales (Login, Brand, Person, etc.)
```

## 🏗️ Comandos Útiles

- `ng generate component name`: Crea un nuevo componente.
- `ng build`: Compila el proyecto para producción en la carpeta `dist/`.
- `ng test`: Ejecuta las pruebas unitarias con Karma.

---
Desarrollado con ❤️ para ofrecer la mejor experiencia en gestión empresarial.
