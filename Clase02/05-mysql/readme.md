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
docker run -d --name mysql-server --env-file=variables.txt  mysql:8
```

### Crear un client de mysql

```
docker run -d --name phpmyadmin -p 8100:80 -e PMA_ARBITRARY=1 phpmyadmin
```


