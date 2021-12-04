const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

// privado
router.post("/add", UserController.add);

// publico
router.post("/login", UserController.login);

router.get("/", UserController.index);

router.put("/update/:id", UserController.update);

module.exports = router;
