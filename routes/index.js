const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const subscriberRouter = require("./subscriber");
const categoryRouter = require("./category");
const productRouter = require("./product");
// const fileRouter = require("./file");

router.use("/users", userRouter);
router.use("/subscriber", subscriberRouter);
router.use("/categories", categoryRouter);
router.use("/products", productRouter);
// router.use("/images", fileRouter);

module.exports = router;
