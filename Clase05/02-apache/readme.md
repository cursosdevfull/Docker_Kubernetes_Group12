# Apache

### Crear un volumen

```
docker volume create vol-apache
```

### Crear contenedor de apache

```
docker run -d --name server-apache -v vol-apache:/usr/local/apache2/htdocs --publish published=8080,target=80 httpd:2.4
```
