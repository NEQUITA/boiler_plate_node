# Certifica API

Este é um microsserviço destinado a construir as regras de negocio do sistema Certifica - Seduc.

## Para rodar o microsserviço

É necessário, primeiramente do arquivo `.env`. Portanto, existe um exemplar para o preenchimento do mesmo no repositório.

#####OBS: O projeto requer a versão 18.x.x do Node.js.

Em seguida basta rodar os seguintes comandos:

#### Instalar as dependências

`npm install`

#### Rodar o microsserviço

`npm run start:dev`

É possível utilizar o Docker também, uma vez que este está configurado, assim sendo possível a utilização com intuito de evitar o processo de configuração do ambiente.

#### Rodar em ambiente docker

`make debug-build` - para buildar e rodar o ambiente em modo debug;

`make debug-run` - para rodar o ambiente em modo debug;

`make dev-build` - para buildar e rodar o ambiente em modo dev;

`make dev-run` - para rodar o ambiente em modo dev;

`npm down` - para terminar os seviços e excluir os volumes criados no docker.
