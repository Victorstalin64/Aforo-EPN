# CupoEPN

**Desarrollo de un sistema web para la gestión de aforo inteligente en espacios de la EPN**

Sistema web que permite monitorear la ocupación de los espacios de la Escuela Politécnica Nacional (biblioteca, laboratorios, cafetería, etc.) en tiempo real, para que estudiantes y administradores tomen mejores decisiones.

## Integrantes

- Victor Calapaqui
- Lizbeth Sanchez

**Asignatura:** Desarrollo de Aplicaciones Web
**Metodología:** Scrum

## Tecnologías

| Capa | Tecnologías |
|---|---|
| Backend | Node.js, Express, JWT, bcrypt, Socket.IO |
| Frontend | React (Vite), Tailwind CSS, Zustand, React Hook Form, Axios, React Toastify, Socket.IO Client |
| Control de versiones | Git y GitHub |

## Estructura del repositorio

```
AforoEPN/
├── Aforo-Backend/     # API REST (puerto 3000)
└── Aforo-Frontend/    # Aplicación web (puerto 5173)
```

## Requisitos previos

- Node.js (versión LTS)
- Git
- VS Code (recomendado)

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/Victorstalin64/Aforo-EPN.git
cd Aforo-EPN
```

### 2. Backend

```bash
cd Aforo-Backend
npm i
```

Crea un archivo `.env` a partir de `.env.example` y completa tus valores. Luego ejecuta:

```bash
npm run dev
```

El servidor corre en `http://localhost:3000`.

### 3. Frontend

```bash
cd Aforo-Frontend
npm i
```

Crea un archivo `.env` en la raíz de `Aforo-Frontend`:

```
VITE_BACKEND_URL=http://localhost:3000/api
```

Luego ejecuta:

```bash
npm run dev
```

La aplicación corre en `http://localhost:5173`.

## Planificación (Scrum)

### Sprint 0: Configuración inicial
- Configuración del backend (Express, variables de entorno, estructura de carpetas).
- Configuración del frontend (Vite, React, Tailwind, hook `useFetch`).

### Sprint 1: Módulos
1. **Autenticación y gestión de usuarios:** registro, login, recuperación de contraseña y roles.
2. **Gestión de espacios:** CRUD de espacios con su aforo máximo.
3. **Control de aforo en tiempo real:** registro de entradas y salidas y ocupación actual.

### Sprints siguientes
- Reserva de cupos con código QR.
- Predicción de ocupación y panel de analítica.

## Licencia

Proyecto académico, Escuela Politécnica Nacional.
