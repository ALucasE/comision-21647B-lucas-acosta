/* Servidor de Foro */

//Importaciones
const express = require('express');
const mysql = require('mysql2');
const { sequelize } = require('./src/models/index.js');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mainRoutes = require('./src/routes/main.routes.js');
const userRoutes = require('./src/routes/users.routes.js')
const postRoutes = require('./src/routes/posts.routes.js')
const config = require('./src/config/config.js');

const app = express();

//Configuracion de plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/src/views')
app.use(express.static((__dirname + '/public')));




app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }));

//middlewares
app.use(morgan('tiny'))
app.use(helmet());



//Prueba de conexión con la Base de Datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

//Ejecucion del servidor
console.log(`NODE_ENV=${config.NODE_ENV}`);
app.listen(config.PORT, config.HOST, function () {
  console.log(`Servidor en ejecución en http://${config.HOST}:${config.PORT}`);
});



//routes - rutas
app.use(cors());
app.use('/', mainRoutes)
app.use('/user', userRoutes)
app.use('/post', postRoutes)


//rutas de pueba
app.get('/test', (req, res) => {
  return res.render('post/index')
})







