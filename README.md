# PERN APP

Essa é uma aplicação que visa simular um portal de notícias, utilizando o postgres, express, react e node. Foi utilizado docker para facilitar a vida do desenvolvedor na instalação das dependências do projeto. Abaixo está o passo a passo de como rodar o backend e o frontend da aplicação.

## Como rodar o backend?

Primeiramente, entre na pasta backend com o comando abaixo:

```bash
cd backend
```

A partir daqui você só precisa rodar o comando de build e up do docker compose, o comando está listado abaixo:

```bash
docker compose up --build api
```

Agora seu backend deve estar rodando normalmente na porta 3000. Acesse http://localhost:3000 e confira.

## Como rodar o frontend?

Aqui você deve entrar na pasta do frontend através do comando abaixo:

```bash
cd frontend
```

Após isso rode comando de up build do docker compose, o comando segue abaixo:

```bash
docker compose up --build web
```

Agora seu frontend deve estar rodando normalmente na porta 3001. Acesse http://localhost:3001 e confira.

## Como rodar os testes do frontend?

Aqui você deve entrar na pasta do frontend através do comando abaixo:

```bash
cd frontend
```

Após isso rode comando de up build do docker compose, o comando segue abaixo:

```bash
docker compose up unit-tests
```
