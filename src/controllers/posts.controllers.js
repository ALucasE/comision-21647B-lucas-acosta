const Post = require('../models').Post
const User = require('../models').User
const controller = {}
// /controller -> Rutas /post
controller.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({
        include: [
            {
            model: User,
            as: 'author'
            }
        ]
        })
        if (posts.title!=null){
          return res.render('post/no-post', { titulo: 'Publicaciones',error: 'No hay publicaciones disponibles en este momento.', tituloPagina: 'Sin Publicaciones'})
        }
        res.render('post/index', { posts });
        //res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        return res.render('common/error', { titulo: 'Error',error: 'Error al buscar Posts', tituloPagina: 'Error 500'})
    }
}

controller.renderCreatePost = async (req, res)=>{
  const { id } = req.params
  const user = await User.findByPk(id)
  
  return res.render('post/post-create', {user})
}

controller.createPost = async (req, res) => {
    //const { title, body,  image_url} = req.body
    //const idUser = req.params
    try {
      const post = await Post.create(req.body)
      //const post = await Post.create({title, body, image_url, idUser})
      res.status(201).json(post)
      //res.redirect('/post')
    } catch (error) {
      console.log(error)
      return res.render('common/error', { titulo: 'Error',error: 'Error al crear post', tituloPagina: 'Error 500'})
    }
  }

module.exports = controller