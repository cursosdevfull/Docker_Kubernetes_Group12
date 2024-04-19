# MySQL con volúmen

### Crear volumen nombrado

```
docker volume create vol-data-mysql
```

### Crear el contenedor

```
docker run -d --name mysql-server -v vol-data-mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_DATABASE=db -e MYSQL_USER=user -e MYSQL_PASSWORD=12345 mysql:8
```
