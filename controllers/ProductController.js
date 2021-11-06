const model = require('../models/product');

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

const search = async (req, res, next) => {
  try {
    const reg = await model.find({ name: { $regex: req.params.query, $options: 'i' } })
    // const reg = await model.find({ name: { $regex: `.*${req.params.query}.*` } })
    res.status(200).json(reg)
  } catch (e) {
    console.log(e)
    res.status(500).send({
      message: 'Ha ocurrido un error.'
    })
  }
}

const store = async (req, res, next) => {
  try {
    const reg = await model.create(req.body)
    res.status(200).json(reg)
  } catch (e) {
    console.error(e)
    res.status(500).send({
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
        message: 'El producto no existe.'
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

const showSlug = async (req, res, next) => {
  try {
    const reg = await model.findOne({ slug: req.params.slug })
    if (!reg) {
      res.status(404).send({
        message: 'El producto no existe.'
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

const category = async (req, res, next) => {
  try {
    const reg = await model.find({ category_id: req.params.vaca });
    res.status(200).json(reg)
  } catch (e) {
    res.status(500).send({
      message: 'Ha ocurrido un error.'
    })
    next(e)
  }
}

const update = async (req, res, next) => {
  try {
    await model.findByIdAndUpdate(req.params.id, { $set: req.body })
    const reg = await model.findById(req.params.id)
    res.status(200).json(reg)
  } catch (e) {
    res.status(500).send({
      message: 'Ha ocurrido un error.'
    })
    next()
  }
}

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
  search,
  store,
  show,
  showSlug,
  category,
  update,
  destroy
}