const routes = require('express').Router()
const { getAllPosts, createPost, renderCreatePost } = require('../controllers/posts.controllers.js')

// -> Rutas /post
routes.get('/', getAllPosts)
//routes.get('/create', renderCreatePost)
routes.post('/create/', createPost)


module.exports = routes