const router = require("express").Router();
const {
  sendNewOrder,
  findOrderById,
  cancelOrderById,
  orderPayment,
} = require("../controllers/order-controllers");

router.post("/send", sendNewOrder);

router.get("find/:id", findOrderById);

router.get("/cancel/:id", cancelOrderById);

router.post("/payment", orderPayment);

module.exports = router;
