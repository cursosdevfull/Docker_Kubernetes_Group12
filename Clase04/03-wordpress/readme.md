# Wordpress

### Crear red

```
docker network create net-wp -d bridge
```

### Crear volúmenes

```
docker volume create vol-mysql-wordpress
docker volume create vol-wp
```

### Crear contenedor MySQL

```
docker run -d --name mysql-server -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_USER=user -e MYSQL_PASSWORD=12345 -e MYSQL_DATABASE=db_wordpress --network net-wp -v vol-mysql-wordpress:/var/lib/mysql mysql:8
```

### Crear contenedor Wordpress

```
docker run -d --name wordpress-server -e WORDPRESS_DB_HOST=mysql-server -e WORDPRESS_DB_USER=user -e WORDPRESS_DB_PASSWORD=12345 -e WORDPRESS_DB_NAME=db_wordpress -p 9000:80 -v vol-wp:/var/www/html --network net-wp wordpress
```
