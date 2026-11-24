# CupoEPN

**Desarrollo de un sistema web para la gestión de aforo inteligente en espacios de la EPN**

Sistema web que permite monitorear la ocupación de los espacios de la Escuela Politécnica Nacional (biblioteca, laboratorios, cafetería, etc.) en tiempo real, para que estudiantes y administradores tomen mejores decisiones.

## Integrantes

- Victor Calapaqui
- Lizbeth Sanchez

**Asignatura:** Desarrollo de Aplicaciones Web
**Metodología:** Scrum

## Tecnologías

| Capa                 | Tecnologías                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------- |
| Backend              | Node.js, Express, MongoDB (Mongoose), JWT, bcrypt, Socket.IO                                  |
| Frontend             | React (Vite), Tailwind CSS, Zustand, React Hook Form, Axios, React Toastify, Socket.IO Client |
| Control de versiones | Git y GitHub                                                                                  |

## Estructura del repositorio

```
AforoEPN/
├── Aforo-Backend/     # API REST (puerto 3000)
└── Aforo-Frontend/    # Aplicación web (puerto 5173)
```

## Requisitos previos

- Node.js (versión LTS)
- MongoDB (local o MongoDB Atlas)
- Git
- VS Code (recomendado)

## Instalación y ejecución

### 1. Clonar el repositorio

```
git clone https://github.com/Victorstalin64/Aforo-EPN.git
cd Aforo-EPN
```

### 2. Backend

```
cd Aforo-Backend
npm i
```

Crea un archivo `.env` en la raíz de `Aforo-Backend` (puedes copiar `.env.example`) y completa tus valores:

```
PORT=3000
MONGODB_URI=tu_cadena_de_conexion_de_mongodb
JWT_SECRET=una_frase_larga_y_aleatoria
```

Crea un usuario de prueba:

```
npm run seed -- Ana Perez ana@epn.edu.ec Clave123
```

Luego ejecuta:

```
npm run dev
```

El servidor corre en `http://localhost:3000`.

### 3. Frontend

```
cd Aforo-Frontend
npm i
```

Crea un archivo `.env` en la raíz de `Aforo-Frontend`:

```
VITE_BACKEND_URL=http://localhost:3000/api
```

Luego ejecuta:

```
npm run dev
```

La aplicación corre en `http://localhost:5173`.

## API

Base: `http://localhost:3000/api`

| Método | Ruta      | Descripción                     | Autenticación |
| ------ | --------- | ------------------------------- | ------------- |
| POST   | `/login`  | Inicia sesión y devuelve un JWT | No            |
| GET    | `/perfil` | Devuelve los datos del usuario  | Bearer Token  |

### Login

```
POST /api/login
```

Body (JSON):

```json
{
  "email": "ana@epn.edu.ec",
  "password": "Clave123"
}
```

Respuesta exitosa (200):

```json
{
  "msg": "Inicio de sesión exitoso",
  "token": "eyJhbGciOi...",
  "rol": "estudiante",
  "nombre": "Ana",
  "apellido": "Perez",
  "_id": "...",
  "email": "ana@epn.edu.ec"
}
```

Errores posibles:

| Código | Motivo                |
| ------ | --------------------- |
| 400    | Campos vacíos         |
| 401    | Password incorrecto   |
| 403    | Cuenta desactivada    |
| 404    | Usuario no registrado |

### Perfil

```
GET /api/perfil
Authorization: Bearer <token>
```

Devuelve `_id`, `nombre`, `apellido`, `email` y `rol` del usuario autenticado. Si el token falta, es inválido o expiró, responde 401.

## Planificación (Scrum)

### Sprint 0: Configuración inicial

- Configuración del backend (Express, variables de entorno, estructura de carpetas).
- Configuración del frontend (Vite, React, Tailwind, hook `useFetch`).

### Sprint 1

- Login a nivel de backend.
