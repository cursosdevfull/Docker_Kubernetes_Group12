# MySQL

### Crear el contenedor

```
docker run -d --name mysql-server -e MYSQL_ROOT_PASSWORD=12345 mysql:8
```

### Crear el contenedor usando variables de entorno

```
docker run -d --name mysql-server -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_DATABASE=db -e MYSQL_USER=user -e MYSQL_PASSWORD=12345 mysql:8
```

### Crear el contenedor usando variables de entorno en un file

```
docker run -d --name mysql-server --env-file=variable.txt mysql:8
```
