# Projeto Express API

Este projeto é uma API simples construída com Express.js que fornece dados sobre países, estados e cidades, além de uma funcionalidade de verificação de e-mail. A API suporta operações de leitura de arquivos JSON para fornecer os dados.

## Funcionalidades

- **Obter todos os países**: Retorna uma lista de todos os países disponíveis.
- **Obter estados de um país**: Retorna todos os estados de um determinado país.
- **Obter cidades de um estado**: Retorna todas as cidades de um determinado estado.
- **Obter estados de um país específico**: Retorna os estados de um país a partir de um arquivo específico na pasta `/country`.
- **Obter cidades de um país específico**: Retorna as cidades de um país a partir de um arquivo específico na pasta `/country`.
- **Obter cidades de um estado específico em um país específico**: Retorna as cidades de um estado específico dentro de um país a partir de um arquivo específico na pasta `/country`.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- npm (geralmente incluído com o Node.js)

## Instalação

- npm install
- npm start

Endpoints
Obter todos os países
GET /api/countries
Retorna uma lista de todos os países.

Obter estados de um país
GET /api/states/:countryId
Substitua :countryId pelo ID do país.
Retorna uma lista de estados para o país especificado.

Obter cidades de um estado
GET /api/cities/:stateId
Substitua :stateId pelo ID do estado.
Retorna uma lista de cidades para o estado especificado.

Obter estados de um país específico
GET /api/country/:countryName/states
Substitua :countryName pelo nome do país.
Retorna os estados do país especificado.

Obter cidades de um país específico
GET /api/country/:countryName/cities
Substitua :countryName pelo nome do país.
Retorna as cidades do país especificado.

Obter cidades de um estado específico em um país específico
GET /api/country/:countryName/:stateName/cities
Substitua :countryName pelo nome do país e :stateName pelo nome do estado.
Retorna as cidades do estado especificado dentro do país.
