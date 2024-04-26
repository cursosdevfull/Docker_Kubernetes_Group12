# Crear contenedores

### MySQL

```
docker run -d --name mysql-server -p 3306:3306 -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_DATABASE=db -e MYSQL_USER=user -e MYSQL_PASSWORD=12345 mysql:8
```
