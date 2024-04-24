# Healthcheck

### Crear una red

```
docker network create net-nginx -d bridge
```

### Crear contenedor de nginx con healthcheck

```
docker run -d --name server-nginx --network net-nginx --health-cmd="curl http://localhost" --health-interval=10s --health-retries=3 --health-start-period=5s --health-timeout=10s nginx:alpine
```
