
CURSO JavaScript Moderno


Instalaciones iniciales MV Windows 8.1:

NDP472-DevPack-ESN-2018.exe
VSCodeUserSetup-x64-1.79.2.exe
npp.8.6.9.Installer.x64.exe
node-v20.17.0-x64.msi

>node --version
v20.17.0

Instalar Git:
https://git-scm.com/download/win

Asturias@renegade MINGW64 ~
$ git config --global user.name "Renegade"
$ git config --global user.email "renegade@gmail.com"
$ git config --global color.ui auto

+Crear el repositorio en GitHub
https://github.com/RenegadeAsturias/JavascriptModerno.git


Abrir el proyecto desde el Visual Studio Code
Y desde la consola inicializarlo como un proyecto de git:

PS C:\Users\Asturias\Desktop\js-vite> git init
Initialized empty Git repository in C:/Users/Asturias/Desktop/js-vite/.git/


Iniciamos con: npm create vite
que instala el paquete create-vite
y nos permite crear un proyecto con la arquitectura de vite

C:\Users\Asturias>cd C:\Users\Asturias\Desktop\js-vite

C:\Users\Asturias\Desktop\js-vite>npm create vite

> npx
> create-vite

√ Project name: ... 01-js-vite-callbacks
√ Select a framework: » Vanilla
√ Select a variant: » JavaScript

Scaffolding project in C:\Users\Asturias\Desktop\js-vite\01-js-vite-callbacks...


Done. Now run:

  cd 01-js-vite-callbacks
  npm install
  npm run dev

C:\Users\Asturias\Desktop\js-vite>


*******************************************************************
C:\Users\Asturias\Desktop\js-vite>npm create vite
√ Project name: ... 02-js-vite-promises 
√ Project name: ... 03-js-vite-promise-race
√ Project name: ... 04-js-vite-async
√ Project name: ... 05-js-vite-async-await
V Project name: ... 06-js-vite-async-await (Use Promise.all)
√ Project name: ... 07-for-await (+ejemplos)

******************** Git+GitHub ***********************************

…or create a new repository on the command line

echo "# JavascriptModerno" >> README.md
git init
git add README.md
git commit -m "Curso JavaScript Moderno"
git branch -M main
git remote add origin https://github.com/RenegadeAsturias/JavascriptModerno.git
git push -u origin main

…or push an existing repository from the command line

git remote add origin https://github.com/RenegadeAsturias/JavascriptModerno.git
git branch -M main
git push -u origin main





