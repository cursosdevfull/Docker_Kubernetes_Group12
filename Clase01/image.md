# Images

### Listar imágenes

```
docker images
```

### Filtrar un listado

```
docker images | grep <texto buscado>
```

### Inspeccionar una imagen

```
docker image inspect <nombre de imagen>:<version o tag de la imagen>
```

### Descargar una imagen

```
docker pull <nombre de la imagen>:<version o tag de la imagen>
```

### Descargar una imagen desde alguna nube

```
docker pull <url del repositorio>/<nombre de la imagen>:<version o tag de la imagen>
```

### Eliminar una imagen

```
docker rmi <nombre de la imagen>:<version o tag de la imagen>
docker rmi -f <nombre de la imagen>:<version o tag de la imagen>
```
