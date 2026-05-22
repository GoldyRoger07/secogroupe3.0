
@echo off
title Angular Custom GH-Pages Deploy

:: =========================
:: CONFIGURATION
:: =========================

set PROJECT_PATH=D:\Documents\dev\secogroupe3.0
::  set TEMP_PATH=D:\Projects\mon-projet\temp
set BUILD_PATH=%PROJECT_PATH%\docs\browser

:: =========================
:: ETAPE 1 - MAIN BRANCH
:: =========================

echo.
echo =========================
echo PUSH MAIN BRANCH
echo =========================

cd /d %PROJECT_PATH%

git add .

git commit -m "auto deploy"

git push

if errorlevel 1 (
    echo.
    echo Erreur git main branch
    pause
    exit /b
)

:: =========================
:: ETAPE 2 - BUILD ANGULAR
:: =========================

echo.
echo =========================
echo BUILD ANGULAR
echo =========================

call ng build --configuration production

if errorlevel 1 (
    echo.
    echo Build echoue
    pause
    exit /b
)


:: ========================
:: commit before switch
:: ========================

echo.
echo ======================
echo commit before switch
echo ======================

git add .

git commit -m "auto com"

:: =========================
:: ETAPE 3 - CLEAN TEMP
:: =========================

:: echo.
:: echo =========================
:: echo CLEAN TEMP
:: echo =========================

:: if exist "%TEMP_PATH%" (
::     rmdir /s /q "%TEMP_PATH%"
:: )

:: mkdir "%TEMP_PATH%"

:: =========================
:: ETAPE 4 - COPY BUILD TO TEMP
:: =========================

:: echo.
:: echo =========================
:: echo COPY BUILD TO TEMP
:: echo =========================

:: xcopy "%BUILD_PATH%\*" "%TEMP_PATH%\" /E /Y /I

:: =========================
:: ETAPE 5 - SWITCH GH-PAGES
:: =========================

echo.
echo =========================
echo SWITCH GH-PAGES
echo =========================

git switch gh-pages

if errorlevel 1 (
    echo.
    echo Impossible de switch vers gh-pages
    pause
    exit /b
)

:: =========================
:: ETAPE 6 - DELETE OLD FILES
:: =========================

echo.
echo =========================
echo DELETE OLD FILES
echo =========================

:: Exemple :
:: supprimer tout SAUF .git, .vscode, .angular, docs, node_modules, .gitignore, myDeploy.bat et CNAME

for /d %%D in (*) do (

    if /I not "%%D"==".git" ^
    if /I not "%%D"==".vscode" ^
    if /I not "%%D"==".angular" ^
    if /I not "%%D"=="docs" ^
    if /I not "%%D"=="node_modules" ^ 
    if /I not "%%D"=="public" (

        echo Suppression dossier : %%D
        rmdir /s /q "%%D"
    )
)

for %%F in (*) do (

    if /I not "%%F"==".gitignore" ^
    if /I not "%%F"=="CNAME" ^
    if /I not "%%F"=="myDeploy.bat" (

        echo Suppression fichier : %%F
        del /q "%%F"
    )
)

:: =========================
:: ETAPE 7 - COPY NEW BUILD
:: =========================

echo.
echo =========================
echo COPY NEW BUILD
echo =========================

xcopy "%BUILD_PATH%\*" "%PROJECT_PATH%\" /E /Y /I

:: =========================
:: ETAPE 8 - CREATE 404.HTML
:: =========================

echo.
echo =========================
echo CREATE 404.HTML
echo =========================

copy index.html 404.html /Y

:: =========================
:: ETAPE 9 - PUSH GH-PAGES
:: =========================

echo.
echo =========================
echo PUSH GH-PAGES
echo =========================

git add .

git commit -m "deploy"

git push

if errorlevel 1 (
    echo.
    echo Erreur push gh-pages
    pause
    exit /b
)

:: =========================
:: FIN
:: =========================

echo.
echo =========================
echo DEPLOYMENT TERMINE
echo =========================

pause