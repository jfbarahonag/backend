const express = require("express");
const router = express.Router();

const SubscriberControllers = require("../controllers/SubscriberController");

router.post("/index", SubscriberControllers.index);

// publico
router.post("/store", SubscriberControllers.store);

module.exports = router;
