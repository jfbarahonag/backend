const express = require("express");
const router = express.Router();

const productRouter = require("./product");
const categoryRouter = require("./category");
const fileRouter = require("./file");
const userRouter = require("./user");

router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/images", fileRouter);
router.use("/users", userRouter);

module.exports = router;
