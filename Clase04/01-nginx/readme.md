# Nginx

### Crear contenedor

```
docker run -d --name server-nginx --publish published=9200,target=80 nginx:alpine
```

## Volumen tipo host

```
docker run -d --name server-nginx --publish published=9200,target=80 -v D:\\Cursos\\Docker_Kubernetes_Group12\\Clase04\\01-nginx\\html:/usr/share/nginx/html nginx:alpine
```

### Volumen tipo host usando PWD (git bash)

```
docker run -d --name server-nginx --publish published=9200,target=80 -v $(pwd -W)/html:/usr/share/nginx/html nginx:alpine
```

### Volumen tipo host usando PWD (en Linux)

```
docker run -d --name server-nginx --publish published=9200,target=80 -v $(pwd)/html:/usr/share/nginx/html nginx:alpine
```

### Volumen tipo host usando PWD (en PowerShell)

```
docker run -d --name server-nginx --publish published=9200,target=80 -v ${PWD}/html:/usr/share/nginx/html nginx:alpine
```

## Volumen nombrado

```
docker volume create <nombre del volumen>
```

### Listar volúmenes nombrados

```
docker volume ls
```

### Crear contenedor con volumen nombrado

```
docker run -d --name server-nginx --publish published=9200,target=80 -v vol-nginx:/usr/share/nginx/html nginx:alpine
```

## Volumen anónimo

```
docker run -d --name server-nginx --publish published=9200,target=80 -v /usr/share/nginx/html nginx:alpine
```
