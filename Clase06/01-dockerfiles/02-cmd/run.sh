#!/bin/bash

echo "Ejecutando el run.sh";
echo "Contenedor de nginx iniciado" > index.html;

nginx -g 'daemon off;';