# Network

### Crear un red de tipo bridge

```
docker network create <nombre> -d bridge
```

### Crear un contenedor vinculado a una red

```
docker run -d --name <nombre contenedor> --network <nombre de la red> <nombre imagen>:<tag o version>
```

### Vincular un contenedor existente a una red

```
docker network connect <nombre red> <nombre o id contenedor>
```

### Desvincular un contenedor existente a una red

```
docker network disconnect <nombre red> <nombre o id contenedor>
```

### Inspeccionar red

```
docker network inspect <nombre red>
```

### Listar redes

```
docker network ls
```

### Para listar los contenedores asociados a una red

```
docker network ls
```
