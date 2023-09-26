const controller = {}
// controller -> Rutas /
controller.getIndex = (req, res)=>{
    res.render('common/index')
}

controller.getAbout = (req, res)=>{
    res.render('common/about')
}

module.exports = controller