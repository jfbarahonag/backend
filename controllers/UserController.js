const model = require("../models/user");
const bcrypt = require("bcrypt");
const token = require("../services/token");

// Privado
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

// Público
const add = async (req, res, next) => {
  try { console.log(req.body)
    let checkEmail = await model.findOne({ email: req.body.email });
    if (!checkEmail) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const reg = await model.create(req.body);
      res.status(200).json(reg);
    } else {
      res.status(404).send({
        message: "El usuario ya existe.",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Ocurrió un error interno.",
    });
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    console.log(req.body);
    checkUser = await model.findOne({
      email: req.body.email,
      status: 1,
    });

    if (checkUser) {
      let match = await bcrypt.compare(req.body.password, checkUser.password);
      // let match = req.body.password == checkUser.password ? true : false;
      if (match) {
        let tokenReturn = await token.encode(checkUser);
        res.status(200).json({ checkUser, tokenReturn });
      } else {
        res.status(401).send({
          message: "Usuario no autorizado.",
        });
      }
    } else {
      res.status(404).send({
        message: "Usuario no encontrado.",
      });
    }
  } catch (error) {}
};

const update = async (req, res, next) => {
  try {
    const { email } = req.body
    let checkEmail = await model.find({ email });
    if (!checkEmail) { //email is not registered yet
      req.body.password = await bcrypt.hash(req.body.password, 10);
      await model.findByIdAndUpdate(req.params.id, { $set: req.body });
      res.status(200).send({
        message: "Algo raro paso"
      })
    } else { // email exists
      req.body.password = await bcrypt.hash(req.body.password, 10);
      await model.findByIdAndUpdate(req.params.id, { $set: req.body });
      res.status(200).send({
        message: "Usuario actualizado.",
      });
    }
  } catch (error) {
    res.status(302).send({
      message: "Email en uso por otra cuenta.",
    });
    next(error);
  }
};

module.exports = {
  index,
  add,
  login,
  update,
};
