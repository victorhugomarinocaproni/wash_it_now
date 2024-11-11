@echo off
:: Constantes do Script
set CONTAINER_NAME=mysql_database
set USER_DB=root
set DB_PORT=3306

docker ps | findstr %CONTAINER_NAME% >nul

if %errorlevel% neq 0 (
    echo Nao existe nenhum container com o nome %CONTAINER_NAME% rodando no sistema
    echo Encerrando script...
    exit 
)

echo Finalizando container: %CONTAINER_NAME%...

docker stop %CONTAINER_NAME% >nul

timeout /t 2 /nobreak >nul

if %errorlevel% neq 0 (
    echo Erro ao finalizar container!
    exit /b %errorlevel%
)

echo Container finalizado com sucesso!
