@echo off
:: Constantes do Script
set CONTAINER_NAME=mysql_database
set USER_DB=root
set DB_PORT=3306

@REM :: docker ps - retorna os containers rodando no sistema
@REM :: pipe (|) - serve para redirecionar um comando à outro, neste caso, pega o retorno de 'docker ps' e já encaminha para o comando 'findstr'
@REM :: findstr - procura por uma 'string'
@REM :: >nul - serve para redicerionar a saída de um comando para "lugar nenhum". Isso é bom porque o comando 'findstr' retorna uma linha 
@REM :: com o nome do container encontrado, e nós não queremos isso porque seria "poluição visual no terminal". Estamos "silenciando" o retorno
@REM :: Juntando tudo: esse comando procura pelo nosso %CONTAINER_NAME% nos containers rodando no sistema; se ele estiver rodando, o retorno do 
@REM :: comando seria 0, se não encontrar, retorna algo != 0. 
docker ps | findstr %CONTAINER_NAME% >nul

@REM :: De acordo com a verificação acima:
@REM :: * == 0 - rodando, ou seja, não queremos iniciar o container 
@REM :: * != 0 - não está rodando, vamos iniciar o docker
if %errorlevel% == 0 (
    echo O Container ja esta rodando. 
) else (

    echo Iniciando o Container: %CONTAINER_NAME% na porta %DB_PORT%

    docker start %CONTAINER_NAME% >nul

    if %errorlevel% == 0 (
        echo Erro ao iniciar Container! Error code: %errorlevel%
        exit /b %errorlevel%
    )

    timeout /t 3 /nobreak >nul

    echo Container Iniciado com Sucesso!

    @REM :: %errorlevel% é utilizado para verificar o valor retornado após a execução do último comando:
    @REM :: * == 0 - sucesso
    @REM :: * != 0 - falha
    @REM :: neq - not equal (seria o !=)
    @REM :: exit /b - sai do script atual com algum código de saída
    @REM :: exit /b %errorlevel% - faz com o que o script seja encerrado com o mesmo código de erro que o comando retornou 
)

echo Entrando no terminal do container e acessando o banco MySQL...

docker exec -it %CONTAINER_NAME% mysql -u %USER_DB% -p -P %DB_PORT% 

if %errorlevel% neq 0 (
    echo Erro ao acessar base de dados! 
    exit /b %errorlevel%
)

@REM echo Acessando a Database: %DB_NAME% no MySQL
@REM docker exec -it %CONTAINER_NAME% mysql -u %USER_DB% -p%DB_PASSWORD% -P %DB_PORT% -D %DB_NAME%
@REM :: Sim, a senha deve estar grudada no '-p', sem espaços!!!

@REM if %errorlevel% neq 0 (
@REM     echo Erro ao Conectar na Base de Dados: %DB_NAME%
@REM     exit /b %errorlevel%
@REM )

