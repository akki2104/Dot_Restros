const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
    trim: true,
  },
  customerDetails: {
    type: Object,
    required: true,
    bookingName: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
  },
  bookingDetails: {
    date: {
      type: String,
      required: true,
      default: Date.now(),
    },
    time: {
      type: String,
      required: true,
    },
  },
  restaurant: {
    type: Object,
    name: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: Number,
      required: true,
    },
  },
  orderDetails: {
    type: Array,
    // required: true,
    default:[]
  },
  paid: {
    type: Boolean,
    required: true,
    default: false,
  },
  // orderTimestamp: {
  //   type: Date,
  //   default: Date.now(),
  // },
});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;

const body = {
  userDetails: {
    id: "",
  },
  customerDetails: {
    bookingName: "",
    phoneNumber: "",
  },
  bookingDetails: {
    date: Date.now(),
    time: "",
  },
  restaurant: {
    name: "",
    code: 2,
  },
  orderDetails: [],
  paid: false,
  orderTimestamp: Date.now(),
};

const obj = {
  customerDetails: {
    bookingName: "nachos",
    phoneNumber: "7350503616",
  },
  bookingDetails: {
    date: 1686650724999,
    time: "20:12",
  },
  restaurant: {
    name: "Pizza Hut",
    code: 2,
  },
  orderDetails: [
    {
      item: "paneer tikka",
      qty: 2,
      price: 45,
    },
    {
      item: "coke",
      qty: 2,
      price: 23,
    },
    {
      item: "roti",
      qty: 6,
      price: 15,
    },
  ],
  orderTimestamp: 1686650724999,
};
