const model = require('../models/file');


const index = async (req, res, next) => {
  try {
    const reg = await model.find();
    res.status(200).json(reg)
  } catch (e) {
    res.status(500).send({
      message: 'Ha ocurrido un error.'
    })
    next(e)
  }
}

const store = async (req, res, next) => { 
  try {
    let name = req.file.filename
    let path = req.file.path
    let x = path.split("\\")
    x.splice(0, 1)
    path = x.join('/')
    // Store file data
    const reg = await model.create({ name: name, path: path })
    res.status(201).json({
      _id: reg._id,
      name: reg.name,
      path: reg.path
    })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      message: 'Ha ocurrido un error'
    })
    next()
  } 
}

const show = async (req, res, next) => {
  try {
    const reg = await model.findById(req.params.id)
    if (!reg) {
      res.status(404).send({
        message: 'El archivo no existe.'
      })
    } else {
      res.status(200).json(reg)
    }
  } catch (e) {
    res.status(500).send({
      message: 'Ha ocurrido un error.'
    })
    next()
  }
}

// const showSlug = async (req, res, next) => {
//   try {
//     const reg = await model.findOne({ slug: req.params.slug })
//     if (!reg) {
//       res.status(404).send({
//         message: 'El producto no existe.'
//       })
//     } else {
//       res.status(200).json(reg)
//     }
//   } catch (e) {
//     res.status(500).send({
//       message: 'Ha ocurrido un error.'
//     })
//     next()
//   }
// }

// const update = async (req, res, next) => {
//   try {
//     await model.findByIdAndUpdate(req.params.id, { $set: req.body })
//     const reg = await model.findById(req.params.id)
//     res.status(200).json(reg)
//   } catch (e) {
//     res.status(500).send({
//       message: 'Ha ocurrido un error.'
//     })
//     next()
//   }
// }

const destroy = async (req, res, next) => {
  try {
    const reg = await model.findByIdAndDelete(req.params.id)
    res.status(200).json(reg)
  } catch (e) {
    res.status(500).send({
      message: 'Ha ocurrido un error.'
    })
    next()
  }
}

module.exports = {
  index, 
  store,
  show,
  // showSlug,
  // update,
  destroy
}