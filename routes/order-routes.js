const router = require("express").Router();
const {
  sendNewOrder,
  findOrderById,
  cancelOrderById,
  orderPayment,
  getAllOrders,
} = require("../controllers/order-controllers");

router.post("/send", sendNewOrder);

router.get("find/:id", findOrderById);

router.get("/cancel/:id", cancelOrderById);

router.post("/payment/:id", orderPayment);

router.get("/all", getAllOrders);

module.exports = router;
