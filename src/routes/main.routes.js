/* Rutas */

const routes = require('express').Router()
const { getIndex, getAbout } = require('../controllers/main.controllers')


// -> Rutas /

routes.get('/', getIndex)
routes.get('/about', getAbout)




module.exports = routes