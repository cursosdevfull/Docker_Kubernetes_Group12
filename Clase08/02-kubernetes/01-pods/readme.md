# POD

### Ejecutar un manifiesto

```
kubectl apply -f <ruta y nombre del manifiesto>
```

### Eliminar un manifiesto

```
kubectl delete -f <ruta y nombre del manifiesto>
```

### Listar pods

```
kubectl get pod
kubectl get po
```

### Describir un pod

```
kubectl describe pod <nombre del pod>
```

### Ingresar a un contenedor dentro de un pod

```
kubectl exec -it <nombre pod> -- <programa a ejecutar>
kubectl exec -it <nombre pod> -c <nombre contenedor> -- <programa a ejecutar>
```
