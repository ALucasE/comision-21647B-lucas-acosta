# Mi Foro Web

![Node.js](https://img.shields.io/badge/Node.js-14.x-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![EJS](https://img.shields.io/badge/EJS-3.x-yellow)
![Sequelize](https://img.shields.io/badge/Sequelize-6.x-orange)
![MySQL](https://img.shields.io/badge/MySQL-5.x-blue)

Mi Foro Web es una aplicación web desarrollada con Node.js, Express, EJS, Sequelize y MySQL que permite a los usuarios crear y compartir publicaciones sobre diversos temas.

## Características

- Creación y visualización de publicaciones.
- Carga de imágenes desde URL para enlazarlas con las publicaciones.
- Diseño responsivo con Bootstrap para una experiencia de usuario atractiva en diferentes dispositivos.

## Requisitos

- Node.js 14.x o superior
- MySQL 5.x o superior

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tuusuario/mi-foro-web.git
   ```

## Voy a describir a continuación los pasos realizados para crear el foro.

- Instalar `node.js` > https://nodejs.org/es
- Configuración del entorno de desarrollo
  - npm init --y (Genera un package.json genérico)
  - En el archivos package-lock.json creamos star y dev (Usamos el comando npm run dev para iniciar con nodemon)
  - Instalamos Express > npm install express
  - configuramos app.js con express
  - Instalamos Sequelize y mySQL > npm install sequelize mysql2
  - Instalamos Sequelize Cli > npm install --save-dev sequelize-cli
  - Iniciamos Sequelize Cli > npx sequelize-cli init
  - Creamos y configuramos el archivo .sequelizerc
  - instalamos nodemon para ayudarnos en el desarrollo > npm install --save-dev nodemon
  -
- Se crean los models
- Se crean controllers
-

# Para crear la tabla de la base de datos

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
npx sequelize-cli db:migrate

npx sequelize-cli model:generate --name Post --attributes title:string,content:text,image_url:string
npx sequelize-cli db:migrate

- Crear las rutas
- Crear los controladores

{
"firstName": "Maria",
"lastName": "Rod",
"email": "mariarod@gmail.com",
"userName": "MariaRod"
}

{
"title": "Post de prueba 02",
"body": "Este es un post de prueba para verificar el funcionamiendo de la conexion con la BD enviado con el Test 02",
"image_url": "https://detallesorballo.com/wp-content/uploads/2020/09/imagen-de-prueba-320x240-1.jpg",
"idUser": 2
}

Este es un post de prueba para verificar el funcionamiendo de la conexion con la BD enviado con el ID 01 - Lucas

CREAR BATS para la instalacion de las dependencias y para ejecutar el servidor Node.js
