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
      //res.status(201).json(post)
      res.redirect('/post')
    } catch (error) {
      console.log(error)
      return res.render('common/error', { titulo: 'Error',error: 'Error al crear post', tituloPagina: 'Error 500'})
    }
  }

controller.getPostByIdUser = async (req, res)=>{
  const { id } = req.params
  try {
    const user = await User.findByPk(id)
    const idUser = user.id
    const posts = await Post.findAll({where: { idUser }})
    
    if (!posts) {
      console.log(error)
      return res.render('post/no-post', { titulo: 'Foro Web',error: 'No hay publicaciones disponibles en este momento.', tituloPagina: 'Sin Publicaciones'})
    }
    res.render('post/post-accion', { posts , user})
  } catch (error) {
    return res.render('common/error', { titulo: 'Error',error: 'Error al con el servidor', tituloPagina: 'Error 500'})
  }
}

controller.renderUpdatePost = async (req, res) => {
  const { id } = req.params
  try {
    const post = await Post.findByPk(id)

    if (!post) {
      return res.render('common/error', { titulo: 'Error',error: 'El post no existe', tituloPagina: 'Error 404'})
    }

    res.render('post/update', {post})
  } catch (error) {
    console.log(error)
    return res.render('common/error', { titulo: 'Error',error: 'Error en el sistema', tituloPagina: 'Error 500'})
  }
}

controller.updatePost = async (req, res)=>{
  const { id } = req.params
  const { title, body, image_url } = req.body;
  try {
    const post = await Post.findByPk(id)
    if (!post) {
      console.log(error)
      return res.render('post/no-post', { titulo: 'Foro Web',error: 'No hay publicaciones disponibles en este momento.', tituloPagina: 'Sin Publicaciones'})
    }

    post.title = title
    if ({body} != ''){
      post.body = body
    }else{
      
    }    
    post.image_url = image_url
    await post.save()
    return res.redirect('/post')
  } catch (error) {
    return res.render('common/error', { titulo: 'Error',error: 'Error al con el servidor', tituloPagina: 'Error 500'})
  }
}

controller.renderDeleteUser = async (req, res)=>{
  const { id } = req.params
    try {
      const post = await Post.findByPk(id)
  
      if (!post) {
        console.log(error)
        return res.render('common/error', { titulo: 'Error',error: 'El post no existe', tituloPagina: 'Error 404'})
      }
      await post.destroy()
      return res.redirect('/post')
    } catch (error) {
      console.log(error)
      return res.render('common/error', { titulo: 'Error',error: 'Error en el sistema', tituloPagina: 'Error 500'})
      
    }
}
module.exports = controller