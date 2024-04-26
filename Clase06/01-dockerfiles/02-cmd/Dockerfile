FROM centos:7

RUN yum install epel-release -y
RUN yum update -y
RUN yum install nginx -y

WORKDIR /usr/share/nginx/html

COPY run.sh .

RUN chmod +x run.sh

CMD ["./run.sh"]

