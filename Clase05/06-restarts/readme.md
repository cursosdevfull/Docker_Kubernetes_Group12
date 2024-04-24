# Restarts

### Reinicio cuando ocurre una falla

```
docker run -d --name server-nginx --restart=on-failure nginx:alpine sh -c "cat no_existe_archivo"
```

### Reinicio a menos que se detenga manualmente

```
docker run -d --name server-nginx --restart=unless-stopped nginx:alpine
```

### Reinicio siempre

```
docker run -d --name server-nginx --restart=always nginx:alpine
docker run -d --name server-nginx --restart=always nginx:alpine sh -c "cat no_existe_archivo"
```
