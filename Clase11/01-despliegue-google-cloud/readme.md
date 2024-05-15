# Despliegue en Google Cloud

### Obtener una cuenta en Google Cloud

- [Google Cloud](https://cloud.google.com)

### Crear un proyecto

### Descargar e instalar el Google Cloud CLI

- [Descargar Google Cloud](https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe?hl=Es)

### Autenticarse con Google Cloud

```
gcloud auth login
```

### Conectar con un proyecto

```
gcloud config set project <PROJECT ID>
gcloud config set project curso-docker10
gcloud auth configure-docker
```

### Habilitar el control de acceso inicial

```
gcloud projects get-iam-policy curso-docker10 --flatten="bindings[].members" --format='table(bindings.role)' --filter="bindings.members:service-845412221130@containerregistry.iam.gserviceaccount.com"
```

### Dominios posibles para los repositorios de imágenes

```
    "asia.gcr.io": "gcloud",
    "eu.gcr.io": "gcloud",
    "gcr.io": "gcloud",
    "marketplace.gcr.io": "gcloud",
    "staging-k8s.gcr.io": "gcloud",
    "us.gcr.io": "gcloud"
```

### Estructura del nombre de las imágenes

- [hostname]/[project id]/[nombre de la imagen]
- gcr.io/curso-docker12/frontend

### Habilitar el api del Container Registry

### Generar las imágenes desde el docker compose

```
docker compose -f compose-gcloud.yaml build
```

### Publicar las imágenes

```
docker compose -f compose-gcloud.yaml push
```

### Habilitar Kubernetes Engine API

### Conectarnos al cluster

```
gcloud container clusters get-credentials cluster-dockergrupo11 --zone us-central1-c --project curso-docker10
```
