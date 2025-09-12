# Jebc Dev Shop

## Instalación y configuración

1. **Clona el repositorio:**

    ```bash
    git clone <URL-del-repositorio>
    cd 04-jebc-dev-shop
    ```

2. **Instala las dependencias:**

    ```bash
    npm install
    ```

3. **Configura la base de datos:**

    - Edita el archivo `.env` y agrega tu cadena de conexión de la base de datos en la variable `DATABASE_URL`.

4. **Ejecuta las migraciones de Prisma:**

    - Para desarrollo:
        ```bash
        npx prisma migrate dev --name init
        ```
    - Para producción (aplica migraciones existentes):
        ```bash
        npx prisma migrate deploy
        ```
        Esto creará o aplicará las tablas necesarias en la base de datos según el esquema definido en `prisma/schema.prisma`.

5. **(Opcional) Genera el cliente de Prisma:**

    ```bash
    npx prisma generate
    ```

6. **Si quieres poblar la base de datos con datos iniciales:**
    ```bash
    npm run seed
    ```

## Ejecución del proyecto

-   **Modo desarrollo:**

    ```bash
    npm run dev
    ```

-   **Build de producción:**
    ```bash
    npm run build
    npm start
    ```

## Scripts útiles

-   `npm run dev` — Inicia el servidor en modo desarrollo.
-   `npm run build` — Compila el proyecto para producción.
-   `npm start` — Inicia el servidor en modo producción.
-   `npm run lint` — Ejecuta ESLint para analizar el código.
-   `npm run seed` — Elimina y repuebla la base de datos con datos iniciales.

## Tecnologías principales

-   Next.js
-   React
-   Prisma ORM
-   Tailwind CSS

## Estructura principal

-   `prisma/` — Esquema y migraciones de la base de datos.
-   `src/` — Código fuente del proyecto.
-   `public/` — Archivos públicos y assets.

## Notas

-   Asegúrate de tener una base de datos configurada y accesible.
-   El script de seed solo se ejecuta en modo desarrollo.
-   Revisa y ajusta el archivo `.env` según tu entorno.
