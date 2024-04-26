FROM httpd:2.4

ENV VERSION=1.0.0
ENV AUTHOR="Juan Perez"
ENV USERNAME=chatgpt

WORKDIR /usr/local/apache2/htdocs

COPY ./web ./

CMD ["apachectl", "-D", "FOREGROUND"]
