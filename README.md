# Music Inc

Music Inc es una aplicación de streaming musical que permite a los usuarios explorar, escuchar y gestionar su biblioteca de música.

## Características

- Explorar música
- Biblioteca personal
- Nuevos lanzamientos
- Reproductor de música

## Requisitos

- Node.js >= 14.x
- npm >= 6.x

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/music-inc.git
    cd music-inc
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Configura las variables de entorno:
    Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:
    ```env
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    ```

4. Inicia la aplicación:
    ```bash
    npm run dev
    ```

## Uso

- Visita `http://localhost:3000` en tu navegador para ver la aplicación en acción.

## Estructura del Proyecto

- `/app`: Contiene las páginas y componentes de la aplicación.
- `/api`: Contiene las rutas de la API.
- `/public`: Contiene los archivos estáticos.

## Endpoints de la API

### POST /api/register

Registra un nuevo usuario y establece una cookie de sesión.

#### Request

- **Body**:
    ```json
    {
        "numIdentificacion": "usuario",
        "password": "contraseña",
        "nombre": "Nombre del Usuario"
    }
    ```

#### Response

- **201 Created**:
    ```json
    {
        "success": true,
        "message": "Registro exitoso"
    }
    ```

- **400 Bad Request**:
    ```json
    {
        "success": false,
        "message": "El usuario ya existe"
    }
    ```

### POST /api/login

Autentica a un usuario y establece una cookie de sesión.

#### Request

- **Body**:
    ```json
    {
        "numIdentificacion": "usuario",
        "password": "contraseña"
    }
    ```

#### Response

- **200 OK**:
    ```json
    {
        "success": true,
        "message": "Login exitoso"
    }
    ```

- **401 Unauthorized**:
    ```json
    {
        "success": false,
        "message": "Credenciales incorrectas"
    }
    ```

## Guía de Uso

### Registro de Usuario

1. Navega a la página de registro (`/register`).
2. Completa el formulario con tu nombre, número de identificación y contraseña.
3. Haz clic en "Registrar".
4. Si el registro es exitoso, serás redirigido al dashboard.

### Inicio de Sesión

1. Navega a la página de inicio de sesión (`/login`).
2. Completa el formulario con tu número de identificación y contraseña.
3. Haz clic en "Iniciar Sesión".
4. Si el inicio de sesión es exitoso, serás redirigido al dashboard.

### Dashboard

El dashboard permite a los usuarios gestionar su cuenta y explorar nuevas funcionalidades.

#### Navegación

- **Inicio**: Muestra un resumen de la actividad reciente.
- **Perfil**: Permite al usuario ver y editar su perfil.
- **Configuración**: Permite al usuario ajustar las configuraciones de su cuenta.

## Contribuir

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT.