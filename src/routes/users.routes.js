const routes = require('express').Router()
const { getAllUsers, createUser , updateUser , getUserById, deleteUser, renderCreateUser, renderMainUser, renderDeleteUser, renderUpdateUser} = require('../controllers/users.controllers')
const { createPost, renderCreatePost } = require('../controllers/posts.controllers.js')

// -> Rutas /user

routes.get('/', getAllUsers)
//routes.get('/', renderMainUser)
routes.get('/create', renderCreateUser)
routes.post('/create', createUser)
routes.get('/post/create/:id', renderCreatePost)
//routes.post('/post/create/:id', createPost)
routes.get('/delete/:id', renderDeleteUser)
routes.get('/:id', getUserById)
routes.get('/update/:id', renderUpdateUser)
routes.post('/update/:id', updateUser)


module.exports = routes