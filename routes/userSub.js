const express = require("express");
const router = express.Router();

const UserSubControllers = require("../controllers/UserSubsControllers");

router.post("/index", UserSubControllers.index);

// publico
router.post("/store", UserSubControllers.store);

module.exports = router;
