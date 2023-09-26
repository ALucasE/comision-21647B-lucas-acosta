const User = require('../models').User
const controller = {}
// controller -> Rutas /user
controller.getAllUsers = async (req, res) => {
    try {
        // Obtén todos los usuarios de la base de datos
        const users = await User.findAll();
    
        // Renderiza la vista 'index.ejs' y pasa los usuarios como datos
        res.render('user/index', { users });
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
        return res.render('common/error', { titulo: 'Error',error: 'Error interno del servidorError al crear usuario', tituloPagina: 'Error 404'})
      }
  }

controller.renderMainUser = async (req, res)=>{
    return res.render('user/index')
}

controller.renderCreateUser = async (req, res)=>{
    return res.render('user/user-create')
}

controller.createUser = async (req, res) => {
    const { firstName, lastName, email } = req.body;
    try {
        const user = await User.create({
            firstName, lastName, email
        })
        //return res.status(201).json(user)
        res.redirect('/user')
    } catch (error) {
        console.error(error)
        return res.render('common/error', { titulo: 'Error',error: 'Error al crear usuario', tituloPagina: 'Error 505'})
    }
}

controller.renderUpdateUser = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findByPk(id)

    if (!user) {
      return res.render('common/error', { titulo: 'Error',error: 'El usuario no existe', tituloPagina: 'Error 404'})
    }

    return res.render('user/update', { user , titulo: 'Actualizar datos de Usuario: ', tituloPagina: 'Actualizar Usuario'})
  } catch (error) {
    console.log(error)
    return res.render('common/error', { titulo: 'Error',error: 'Error en el sistema', tituloPagina: 'Error 500'})
  }
}

controller.updateUser = async (req, res) => {
  const { id } = req.params
  const { firstName, lastName, email } = req.body;
  try {
    const user = await User.findByPk(id)

    if (!user) {
      return res.render('common/error', { titulo: 'Error',error: 'El usuario no existe', tituloPagina: 'Error 404'})
    }

    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    await user.save()
    return res.redirect('/user/')
  } catch (error) {
    console.log(error)
    return res.render('common/error', { titulo: 'Error',error: 'Error en el sistema', tituloPagina: 'Error 500'})
  }
}

controller.getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findByPk(id)
        if (!user) {
          console.log(error)
          return res.render('common/error', { titulo: 'Error',error: 'Usuario no encontrado', tituloPagina: 'Error 404'})
        }
        res.render('user/user-accion', { user })
    } catch (error) {
        console.log(error)
        return res.render('common/error', { titulo: 'Error',error: 'Error al obtener el usuarios', tituloPagina: 'Error 500'})
    }
}

controller.renderDeleteUser = async (req,res)=>{
    const { id } = req.params
    try {
      const user = await User.findByPk(id)
  
      if (!user) {
        console.log(error)
        return res.render('common/error', { titulo: 'Error',error: 'El usuario no existe', tituloPagina: 'Error 404'})
      }
      await user.destroy()
      return res.redirect('/user')
    } catch (error) {
      console.log(error)
      return res.render('common/error', { titulo: 'Error',error: 'Error en el sistema', tituloPagina: 'Error 500'})
      
    }
}

controller.deleteUser = async (req, res) => {
    const { id } = req.params
    try {
      const user = await User.findByPk(id)
  
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado.' })
      }
      
      await user.destroy()
      return res.status(200).json({ message: 'Usuario eliminado exitosamente' })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: 'Error al obtener los usuarios' })
    }
  }

module.exports = controller