# Angular

### Crear contenedor

```
docker run -d --name server-angular --publish published=9000,target=80 -v $(pwd -W)/dist/07-angular/browser:/usr/share/nginx/html nginx:alpine
```
