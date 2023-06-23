const express = require("express");
const app = express();
const cors = require('cors');

const dbconnect = require("./db/connect");
const cookieSession = require("cookie-session");
const passport = require("passport");
const orderRoutes = require("./routes/order-routes");
const authRoutes = require("./routes/auth-routes");
const userRoutes = require("./routes/user-routes");
const reviewsRoutes = require("./routes/reviews-routes");
const passportSetup = require("./config/passport-setup");
require("dotenv").config();

app.use(express.json());
app.use(express.static("public"));
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["nacho5Ame5owe"],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.enable("trust proxy");
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000"
  })
);

app.use("/orders/", orderRoutes);
app.use("/auth/", authRoutes);
app.use("/user/", userRoutes);
app.use("/reviews/", reviewsRoutes);



const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;
const startServer = async () => {
  await dbconnect(mongoURI);
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};
startServer();
