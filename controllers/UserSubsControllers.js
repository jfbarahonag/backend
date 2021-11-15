const model = require("../models/user");

const index = async (req, res, next) => {
  try {
    const reg = await model.find();
    res.status(200).json(reg);
  } catch (e) {
    res.status(500).send({
      message: "Ha ocurrido un error.",
    });
    next(e);
  }
};

const store = async (req, res, next) => {
  try {
    const reg = await model.create(req.body);
    res.status(200).json({
      name: req.body.name,
      email: req.body.email,
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      message: "Ha ocurrido un error",
    });
    next();
  }
};

module.exports = {
  index,
  store,
};
