# Postgres

### Contenedor

```
docker run -d --name server-postgres -e POSTGRES_PASSWORD=12345 postgres:alpine3.19
```

### Cliente de postgres

```
docker run -d --name client-postgres -p 7000:80 -e PGADMIN_DEFAULT_EMAIL=sergiohidalgocaceres@gmail.com -e PGADMIN_DEFAULT_PASSWORD=54321 --network net-curso dpage/pgadmin4
```

### Cliente con network

```
docker run -d --name client-postgres -p 7000:80 -e PGADMIN_DEFAULT_EMAIL=sergiohidalgocaceres@gmail.com -e PGADMIN_DEFAULT_PASSWORD=54321 --network net-curso dpage/pgadmin4
```
