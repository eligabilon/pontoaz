# Docker
Este projeto pode ser executado atraves do docker ele ira subir os conteiners responsaveis por 
  - Banco de dados MYsql
  - phpmyadmin
  - Servidor apache
  - Servidor nginx

## Execução
Primeiro faça o build das imagens

```sh
$ docker-compose build
```
	
	
Apos isso e possivel subir os conteines

```sh
$ docker-compose up
```
	
### Se você quer o servidor em segundo plano
```sh
$ docker-compose up -d --build
```
	
### Desligue a máquina virtual
```sh
$ docker-compose up -d --build
```