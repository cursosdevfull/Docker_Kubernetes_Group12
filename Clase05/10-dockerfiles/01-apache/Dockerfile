FROM centos:7

RUN yum update -y && yum install -y httpd

COPY ./html /var/www/html

CMD ["apachectl", "-D", "FOREGROUND"]