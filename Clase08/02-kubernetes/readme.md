# Kubernetes

### Creación de pod

```
kubectl run <nombre del pod> --image=<nombre imagen>
```

### Port-foward

```
kubectl port-forward server-web 7000:80
```

### Comandos básicos

```
kubectl version
kubectl api-resources
kubectl api-versions
```

### Ejecutar un manifiesto

```
kubectl apply -f ./01-pods.yaml
```
