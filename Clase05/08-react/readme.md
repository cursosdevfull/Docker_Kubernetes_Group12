# React

### Crear contenedor

```
docker run -d --name server-react --publish published=9000,target=80 -v $(pwd -W)/dist:/usr/share/nginx/html nginx:alpine
```
