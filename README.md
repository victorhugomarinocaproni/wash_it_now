# Comandos para Rodar o Docker no Windows 11:

Antes de tudo, você já deve ter instalado o Docker na sua máquina e configurado um container com a imagem de alguma Database que você vai utilizar. 

Após ter configurado seu container, você deve iniciá-lo para que, então, possa começar a utilizar o banco de dados. 
<br>
<strong>OBS: Se o container estiver parado (stopped), o banco não funcionará</strong>.

Existem duas maneiras de startar seu container:
<ol>
    <li>Via software 'Docker Desktop'</li>
    <li>Via Terminal</li>
</ol>

## Docker Desktop:
Abra o software, selecione o Container que deseja e clique no ícone de setinha no canto superior direito. Pronto, o container vai startar. Para desligar, basta clicar no ícone de quadrado, também no canto superior direito, e o container vai parar.

## Terminal:
1 - Para iniciar um container, você deve saber o <strong>NOME</strong> ou o <strong>ID</strong> dele. Para isso, digite no terminal:
```
docker ps -a
```
Esse comando vai listar todos os containers que têm na sua máquina, mostrando todas as informções necessárias sobre eles.

2 - Para iniciar o container, digite:
```
docker start <nome-do-container-ou-id>
```

3 - Em seguida, execute:
```
docker exec -it <nome-do-container-ou-id>
```
Esse comando vai abrir uma espécie de 'terminal' do docker

4 - Por fim, execute:
```
mysql -u <usuário> -p
```
Este comando é que, de fato, te conecta no banco de dados MySQL do container

### OBS:
Se você estiver com pressa, pode executar o passo 3 e 4 em um só comando:
```
docker exec -it <nome-do-container-ou-id> mysql -u <usuario> -p
```
No caso do nosso projeto, o nome de usuário é <strong>root</strong> e a senha é <strong>teste123</strong>. Portanto, o comando ficaria:
```
mysql -u root -p
```

# Scripts de Docker (Windows 11):
Para facilitar, deixei dois (2) scripts de docker já prontos no diretório 'backend' do projeto: <strong>start-docker.bat</strong> e <strong>stop-docker.bat</strong>. Ambos funcionam normalmente no terminal CMD e PowerShell, entretanto, a maneira de executá-los é diferente dependendo do terminal:

## CMD
Para executar no CMD, você deverá navegar até o diretório 'backend' do projeto, escrever o nome do arquivo e apertar ENTER:
```
<nome-do-arquivo>.bat
```
### Exemplo:
```
start-docker.bat
```

## PowerShell:
Para executar no PowerShell, você deverá navegar até o diretório (comando 'cd') 'backend' no projeto e colocar ' <strong> .\ </strong> ' na frente do arquivo que deseja executar:
```
.\<nome-arquivo>.bat
```
### Exemplo:
```
.\start-docker.bat
```

# Sequelize:
No projeto, estamos utilizando o <strong>ORM (Object Relational Mapper) "Sequelize"</strong>, que nos fornece várias facilidades e trás uma "padronização" na maneira de trabalhar/interagir com o banco de dados. De maneira geral, temos:

 * Arquivo de configuração do Sequelize (.sequelizerc)

```
npx sequelize db:create
npx sequelize db:migrate
npx sequelize seed:generate --name <nome_do_arquivo>
```


### Exemplo de Migration de Alter Table:
Nome do arquivo de migration
```
20241106130118-alter-usuarios-email.js
```
Conteúdo do Arquivo:
```
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addColumn('usuarios',
      'email', 
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('usuarios',
      'email'
    );
  }
};
```



