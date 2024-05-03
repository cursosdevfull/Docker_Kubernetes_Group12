# Laravel

### Crear el proyecto

```
docker compose run --rm composer create-project --prefer-dist laravel/laravel .
```

### Modificar los parámetros de conexión a la base de datos

- Editar el archivo src/config/database.php
- Cambiar los datos de conexión a MySQL

### Migración inicial de datos

```
docker compose run --rm artisan migrate
```

### Instalar librería para el frontend

```
docker compose run npm install <librería>
```

### Ejecutar los contenedores principales

```
docker compose up -d server-web php mysql
```
