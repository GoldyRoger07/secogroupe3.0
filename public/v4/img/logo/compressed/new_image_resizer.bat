@echo off
setlocal enabledelayedexpansion

:: Définir la largeur maximale ciblée (la hauteur s'adaptera automatiquement)
set "MAX_WIDTH=200"

:: Créer le dossier de sortie s'il n'existe pas
if not exist "resized" mkdir "resized"

echo --- Debut du redimensionnement des images ---

:: Traitement des fichiers JPG, JPEG et PNG
for %%f in (*.jpg *.jpeg *.png *.webp) do (
    echo Traitement de : %%f
    ffmpeg -y -i "%%f" -vf scale="%MAX_WIDTH%:-1" "resized\%%~nf_resized%%~xf" -loglevel error
)

echo --- Termine ! Les images sont dans le dossier "resized" ---
pause
