# <img src="https://formaturismo.com.br/images/logo.jpg" width=76> Forma Turismo

Desafio Forma Turismo.
Desenvolver uma api que busca um usuário a partir do parâmetro em uma tabela SQL e todos usuários da tabela.

## Getting started

First of all, clone this project to your local development environment:

```sh
$ git clone git@github.com:Holandess/desafio-forma-turismo.git
```

You'll need the following dependencies to work on this project:

- [Node 8.x.x](https://github.com/creationix/nvm)
- [Mysql 2.x.x](https://github.com/mysqljs/mysql#readme)
- [Nodemon 2.x.x](https://github.com/remy/nodemon)

Then, install packages using the commands:

```sh
$ yarn #updates node dependencies
```

### Config MYSQL

Before running or the project initializes add as mysql settings

```sh
$ cd src/config/database.js
```

host: "localhost",
user: "your user",
password: "your pass",
database: "EXAMPLE_DATABASE"

- host: The hostname of the database you are connecting to. (Default: localhost)
- user: The MySQL user to authenticate as.
- password: The password of that MySQL user.
- database: Name of the database to use for this connection (Optional).

### Start the local server

```sh
$ yarn start
```
