# Ponto AZ - Back-end

Aqui esta presente o codigo do back-end do projeto. 

### Tecnologias
Esse projeto foi feito usando as tecnologias abaixo descritas.
  - PHP
  - Slim framework
  - mPDF
  - mysql

# Rotas

### Usuario
| METODO | ROTA | RESULTADO |
| ------ | ------ | ------ |
| GET | /usuario/ | Lista de todos os usuarios |
| GET | /usuario/contribuidores | Lista de todos os usuarios que contribuiram com o projeto |
| GET | /usuario/pis | Lista de pis cadastrado no sistema |
| GET | /usuario/count | Quantidade de usuarios cadastrados no sistema |
| GET | /usuario/{id} | Retorna o usuarios com o id informado |
| DELETE | /usuario/{id} | Deleta o usuarios com o id informado |

### AUTH
| METODO | ROTA | RESULTADO |
| ------ | ------ | ------ |
| POST | /auth/register | Registrar usuario |
| POST | /auth/login | Fazer login do usuario |
| POST | /auth/update/{id} | Atualizar usuario |

### IMPRESSAO
| METODO | ROTA | RESULTADO |
| ------ | ------ | ------ |
| POST | /impressao | Impressão da justificativa do ponto |
| GET | /impressao/count | Quantidade de impressões realizadas |
| GET | /impressao/informacoes-usuarios | Informações e registros de impressões dos usuarios |

### MENSAGEM
| METODO | ROTA | RESULTADO |
| ------ | ------ | ------ |
| GET | /mensagens/boas | Lista de mensagens boas |
| GET | /mensagens/ruins | Lista de mensagens ruins |
| POST | /mensagens/ | Serviço para salvar uma mensagem |

### DASHBOARD
| METODO | ROTA | RESULTADO |
| ------ | ------ | ------ |
| GET | /dashboard/info | Informações apresentadas no dashboard |

### Instalação

Para o gerenciamento das dependencias do projeto nos usamos o  [composer](https://getcomposer.org/) então para a instalação das dependencias e necessarios executar o comando.

```sh
$ composer install
```
### Instalação

Para o gerenciamento das dependencias do projeto nos usamos o  [composer](https://getcomposer.org/) então para a instalação das dependencias e necessarios executar o comando.

```sh
$ composer install
```

### Desenvolvimento

Em ambiente de desenvolvimento e possivel testar o backend atraves do comando abaixo.

```sh
$ php -S localhost:8000
```

### Configuração

A configuração de banco de dados pode ser encontrada no arquivo *init.php*

```sh
define('MYSQL_HOST', 'localhost');
define('MYSQL_USER', 'root');
define('MYSQL_PASS', '');
define('MYSQL_DBNAME', 'app');
```

### Banco de dados

O backup do banco pode ser encontrado na pasta *docker/mysql/app.sql*

License
----

MIT
