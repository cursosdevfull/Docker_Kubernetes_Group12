# Nginx

### Crear un contenedor

```
docker run -d --name server-nginx -v $(pwd -W)/html:/usr/share/nginx/wwww -v $(pwd -W)/nginx/default.conf:/etc/nginx/conf.d/default.conf -p 9500:80 nginx:alpine
```
