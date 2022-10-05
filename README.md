# TESTE DA MV

## Yarn install

## yarn dev

- .env com secret key para evitar trabalho
- Caso queira mudar as portas, adicionar no .env as variáveis
- Porta padrão: 3000
-       **APP_PORT**
-       **NODE_ENV**

Endpoints:

## Rota de login da api utilizar

-       /api/login
  ```
    {
      "username": "mvteste"
    }
  ```

#### Todas as rotas precisam do header authorization Bearer + Token retornado na rota de login

-       /api/letters

* Recupera todas as letters de acordo com a interface sugerida

-       /api/letters/id

* Recupera todas as letters de acordo com a interface sugerida por ID de usuário

Api contém autenticação JWT com mocks e o Login é _mvteste_

# Testes

Somente rodar **jest** no terminal.
