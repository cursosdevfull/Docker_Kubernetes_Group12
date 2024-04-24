# Limitar uso de memoria y procesador

### Memoria

```
docker run -d --name server-nginx01 --memory=10m nginx:alpine
docker run -d --name server-nginx01 --memory=300m --memory-swap=1g nginx:alpine
```

### Procesador

```
docker run -d --name server-nginx01 --cpus="1.5" nginx:alpine
docker run -d --name server-nginx01 --cpuset-cpus="0-2" nginx:alpine
docker run -d --name server-nginx01 --cpuset-cpus="1,3" nginx:alpine
```
