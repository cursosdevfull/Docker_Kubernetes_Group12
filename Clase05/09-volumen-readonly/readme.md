# Volumen de solo lectura

### Crear contenedor con volumen ro

```
docker run -d --name server-nginx -v $(pwd -W)/web:/usr/share/nginx/html:ro -p 9000:80 nginx:alpine
```
