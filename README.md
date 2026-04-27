# 🚀 AngularFirst - Enterprise Management System

AngularFirst is a modern, robust management platform built with **Angular 17**, designed to deliver a premium user experience with a focus on reactivity, clean design, and high scalability.

---

## ✨ Key Features

The system is architected with a modular approach to ensure ease of maintenance and rapid expansion:

- **🔐 Secure Authentication**: Comprehensive login system with robust validation and security protocols.
- **🏷️ Brand Management**: Complete lifecycle management for vehicle brands, including high-resolution logo uploads.
- **🛠️ Service & Tool Catalog**: Integrated modules for managing service offerings and technical tool inventories with ease.
- **👥 Personnel Management**: Centralized hub for managing owners, clients, and mechanics.
- **📄 Dynamic Documentation**: Scalable administration of document types and workflow-critical formats.
- **🎨 Premium UI/UX**: State-of-the-art interface featuring glassmorphism, smooth micro-animations, and a curated design system.

## 📂 Project Structure

Following Angular best practices, the project is organized into three main layers:

```text
src/app/
├── core/           # Singleton services, global guards, and HTTP interceptors.
├── shared/         # Reusable components, pipes, directives, and UI models.
└── features/       # Functional modules (Login, Brand, Mecanic, Tool Catalog, etc.)
```

## 🛠️ Tech Stack

- **Framework**: [Angular 17](https://angular.dev/)
- **State Management**: [RxJS](https://rxjs.dev/) for asynchronous data streams and reactive state.
- **Styling**: Modern Vanilla CSS with CSS Variables for a flexible design system.
- **Utilities**: `UUID` for unique identifier generation.
- **Testing**: Jasmine & Karma for robust unit testing.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Angular CLI](https://github.com/angular/angular-cli) v17.0.0+

### Local Deployment

1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   cd angularfirst
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment:**
   Ensure the API configuration in `src/environments/environment.ts` matches your backend. By default, it connects to `http://localhost:3000`.

4. **Launch Development Server:**
   ```bash
   npm start
   ```
   Access the application at `http://localhost:4200/`. The app will automatically reload on source changes.

## 🏗️ Development Commands

- `ng generate component <name>`: Scaffold a new component.
- `ng build`: Compile the project into the `dist/` directory for production.
- `ng test`: Execute unit tests via Karma.

---

Built with ❤️ for a superior enterprise management experience.
