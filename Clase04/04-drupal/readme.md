# Drupal

### Crear red

```
docker network create net-drupal -d bridge
```

### Crear volúmenes

```
docker volume create vol-mysql-drupal
docker volume create vol-drupal
```

### Crear contenedor MySQL

```
docker run -d --name mysql-server -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_USER=user -e MYSQL_PASSWORD=12345 -e MYSQL_DATABASE=db_drupal --network net-drupal -v vol-mysql-drupal:/var/lib/mysql mysql:8
```

### Crear contenedor Drupal

```
docker run -d --name drupal-server -p 9000:80 -v vol-drupal:/var/www/html --network net-drupal drupal
```
