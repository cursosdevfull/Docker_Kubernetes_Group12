# Container

### Crear un contenedor

```
docker create --name <nombre del contenedor> <nombre de la imagen | ID de la imagen>:<version o tag de la imagen>
```

### Listar contenedores que se están ejecutándose

```
docker ps
```

### Listar contenedores ejecutándose o no

```
docker ps -a
```

### Iniciar un contenedor

```
docker start <nombre del contenedor | ID de contenedor>
```

### Detener un contenedor

```
docker stop <nombre del contenedor | ID de contenedor>
```

### Crear y ejecutar un contenedor con nombre

```
docker run --name <nombre del contenedor> <nombre de la imagen o id de la imagen>:<version o tag>
```

### Crear y ejecutar un contenedor con nombre pero no vinculado

```
docker run -d --name <nombre del contenedor> <nombre de la imagen o id de la imagen>:<version o tag>
```

### Eliminar un contenedor

```
docker rm <nombre o id del contenedor>
```

### Eliminar un contenedor que se está ejecutando

```
docker stop <nombre o id del contenedor>
docker rm <nombre o id del contenedor>
```

### Eliminar un contenedor que se está ejecutando (forma simplificada)

```
docker rm -f <nombre o id del contenedor>
```

### Mapear puertos

```
docker run -d --name <nombre del contenedor> -p 7000:80 <nombre de la imagen o id de la imagen>:<version o tag>
```

### Inspeccionar contenedor

```
docker inspect <nombre o id del contenedor>
```
