# Mi Foro Web

![Node.js](https://img.shields.io/badge/Node.js-14.x-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![EJS](https://img.shields.io/badge/EJS-3.x-yellow)
![Sequelize](https://img.shields.io/badge/Sequelize-6.x-orange)
![MySQL](https://img.shields.io/badge/MySQL-5.x-blue)
![Badge en Desarollo](https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green)
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

2. Instala las dependencias:
- npm install express cors ejs helmet morgan sequelize mysql2

3. Configura la base de datos en el archivo config.js.
- En src/config se encuentran los archivos de configuración

4. Ejecuta las migraciones para crear las tablas en la base de datos:
- ```npx sequelize-cli db:migrate```

5. Inicia la aplicación:

- ```npm start```

6. Abre tu navegador y accede a http://localhost:3000 para ver el foro en funcionamiento.
- Esta ruta puede cambiar según la configuración que se ingrese en el punto 3

## Uso

- Al ingresar a la carpeta raíz del proyecto están los enlaces en botones para ir a los usuarios y a las publicaciones.
- Dentro de estas opciones tienes la opción de crear un usuario/post y se mostrara las acciones de actualizar o eliminar los datos.
- Las publicaciones se mostrarán en la página /post con su contenido y fecha de creación.

## Contribuciones

¡Las contribuciones son bienvenidas! Si quieres mejorar este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu nueva función: `git checkout -b nueva-funcion.`
3. Desarrolla y prueba tus cambios.
4. Haz un commit con tus cambios: `git commit -m "Añade nueva función".`
5. Sube tus cambios a tu repositorio: `git push origin nueva-funcion.`
6. Abre un pull request en el repositorio original.

## Licencia
Este proyecto está bajo licencia de código abierto.

¡Gracias por usar Mi Foro Web! Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto con nosotros.
