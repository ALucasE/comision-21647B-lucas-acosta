const routes = require('express').Router()
const { getAllPosts, createPost, renderCreatePost, getPostByIdUser , updatePost , renderUpdatePost, deletePost, renderDeleteUser} = require('../controllers/posts.controllers.js')

// -> Rutas /post
routes.get('/', getAllPosts)
//routes.get('/create', renderCreatePost)
routes.post('/create/', createPost)
routes.get('/:id', getPostByIdUser)
routes.get('/update/:id' , renderUpdatePost)
routes.post('/update/:id' , updatePost)
routes.get('/delete/:id', renderDeleteUser)


module.exports = routes