const Order = require("../models/orders-model");
const User = require("../models/users-model");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const allRestaurantPrices = require("../data/restaurant-price-details");
const {SendMail}=require("../nodemailer");
const { findByIdAndUpdate } = require("../models/orders-model");

const sendNewOrder = async (req, res) => {
  try {
    //Save a booking to the DB
    const user = req.user;
    const orderDetails = req.body;
    orderDetails.userId = user.id;
    const newOrder = await Order.create(orderDetails);
    //Add the order id to the user's array
    await User.findOneAndUpdate(
      { _id: user.id },
      {
        $push: {
          orders: { id: newOrder.id },
        },
      }
    );
    res.send([newOrder, user]);
    SendMail(newOrder)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const findOrderById = async (req, res) => {
  try {
    const id = req.params.id;
    const order = await Order.findById(id);
    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const cancelOrderById = async (req, res) => {
  // Delete an order from DB
  try {
    const orderId = req.params.id;
    const user = req.user;
    await User.findOneAndUpdate(
      { _id: user.id },
      {
        $pull: {
          orders: { id: orderId },
        },
      }
    );
    const order = await Order.findByIdAndDelete(orderId);
    if (!order) res.json({ message: "Order Doesn't Exist" });
    else res.json({ message: "Order Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const orderPayment = async (req, res) => {
  //Proceed to pay for a booking
  // const { code, items } = req.body;
  // const restaurantItems = allRestaurantPrices.get(code);
  // try {
  //   const session = await stripe.checkout.sessions.create({
  //     payment_method_types: ["card"],
  //     mode: "payment",
  //     line_items: items.map((item) => {
  //       const restaurantItem = restaurantItems.get(item.id);
  //       return {
  //         price_data: {
  //           currency: "inr",
  //           product_data: {
  //             name: restaurantItem.name,
  //           },
  //           unit_amount: restaurantItem.priceInPaise,
  //         },
  //         quantity: item.qty,
  //       };
  //     }),
  //     success_url: "http://localhost:4000/success.html",
  //     cancel_url: "http://localhost:4000/cancel.html",
  //   });
  //   res.json({ url: session.url });
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({ message: error.message });
  // }

  const data= await User.findOne({username:req.user.username})
  if(data.admin){
    try {
      console.log(req.params.id)
      const task=await Order.findByIdAndUpdate({_id:req.params.id},{paid:true},{new:true})
      return res.send(task)
    } catch (error) {
      console.log(error.message)
    }
  }else res.json({msg:"Pls go back to coustmer side"}) 


};

const getAllOrders = async (req, res) => {
  try {
    const ordersList = await Order.find();
    res.json(ordersList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  sendNewOrder,
  findOrderById,
  cancelOrderById,
  orderPayment,
  getAllOrders,
};
