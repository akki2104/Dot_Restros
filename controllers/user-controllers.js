const Order = require("../models/orders-model");

const getUserProfile = async (req, res) => {
  try {
    const { username, orders } = req.user;
    const userData = { username };
    const ordersList = [];
    //Fetching complete order details from their ids for a user
    orders.forEach((order) => {
      ordersList.push(Order.findById(order.id));
    });
    // Letting all the promises get fulfilled
    userData.orders = await Promise.all(ordersList);
    res.json(userData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUserProfile };
