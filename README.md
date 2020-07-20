# clinic_control

Aplicação construída com NODE.js e React Native, Redux, Typescript, migrations, TYPEORM, PostgreSQL.
A proposta dessa aplicação é controlar o cadatro de cliente e de pacientes, integrado com um
aplicativo mobile, sendo o NODE como uma API fornecendo e recebendo dados da aplicação mobile.
A persistência dos dados está configurado para o POSTGRESQL com migrations e TYPEORM.
Ambiente de banco de dados usando Docker.
Projeto para aprendizado e familiarização do NODE.js com React Native.

# Instruções de execução no ubuntu:

1. Necessario ter instalado o **yarn**, **PostgreSQL** e o **@react-native-community/cli**.
2. Instalando o yarn:

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

- Instalando o React-Native:

  ```
  yarn global add @react-native-community/cli
  ou
  npm install -g @react-native-community/cli
  ```

- Caso tiver instalado o pacote **react-native-cli** terá que remover:

  ```
  yarn global remove react-native-cli
  ou
  npm uninstall -g react-native-cli
  ```

3. Clone o repositório.

## Instruções backend NODE.js

4. Entre na pasta (backend) do repositorio clonado pelo terminal.
5. Execute os camandos:

- Para instalar os pacotes de dependências do projeto:

```
yarn
```

- Para iniciar o serviço API:

```
yarn dev:server
```

### Instruções DOCKER

- Dados de configuração do banco de dados (ormconfig.json na raíz da pasta **backend**):

```
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "docker",
  "database": "builtCode",
```

#### INSTALANDO E CONFIGURANDO O BANCO DE DADOS COM DOCKER

- Caso precise, de fazer a instalacao e configuracao do Docker:

```
  // INSTALAÇÃO DOCKER
  sudo apt update
  sudo apt remove docker docker-engine docker.io
  sudo apt install docker.io

  // SERVIÇO PARA INICIAR AUTOMÁTICO
  sudo systemctl start docker
  sudo systemctl enable docker

  // INSTALAÇÃO DO CONTAINER POSTGRES
  sudo docker run --name builtCode_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

  // INICIAR O CONTAINER DO BANCO
  sudo docker start builtCode

  // VERIFICANDO SE O CONTAINER INICIOU:
  sudo docker ps
```

## APLICAÇÃO MOBILE

6. Entre na pasta **controlMedical**(pasta do aplicativo mobile) e execute os comandos:

- Para instalar os pacotes de dependências do projeto:

```
yarn
```

- Para iniciar o metro bundler:

```
yarn start
```

- Para iniciar a aplicação (já com o celular ou o emulador aberto):

```
yarn android
```

## INTEGRANDO A API DO BACKEND NO APLICATIVO MOBILE COM AXIOS:

- IOS com emulador: localhost
- IOS com físico: IP da máquina
- Android com Físico: IP da máquina
- Android com Emulador: localhost (adb reverse tcp:3333 tcp:3333)
- Android com Emulador: 10.0.2.2 (Android Studio)
- Android com Emulador: 10.0.3.2 (Genymotion)

```
...
  const api = axios.create({
    baseURL: 'http://localhost:3333',
  });
...
```

# Limitações:

Esta aplicação, por enquanto, apenas **cadastra** e **lista** os médicos.
Não permite gravação de um mesmo registro de CRM. A lista mostra os campos Nome e CRM.

# Próximas Features:

- Fazer a edição e exclusão de médicos.

- Criar a tabela de pacientes e permitir cadastro, edição e exclusão.

- Criar uma lista de "Cards" na listagem de registros.

# Request API REST:

- Api está configurada para a porta 3333.

| Name     | Method | Parameters                                        | Description                   |
| -------- | ------ | ------------------------------------------------- | ----------------------------- |
| /doctors | GET    | -                                                 | Lista os médicos cadastrados. |
| /doctors | POST   | body { name: string, crm: string, crmuf: string } | Cadastra médico.              |

- Exemplo:

  https://localhost:3333/doctors
