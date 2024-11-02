const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const adminOrderRouter = require("./routes/admin/order-routes");
const path = require("path");
const shopProductsRouter = require("./routes/shop/products-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const shopSearchRouter = require("./routes/shop/search-routes");
const shopReviewRouter = require("./routes/shop/review-routes");

const commonFeatureRouter = require("./routes/common/feature-routes");

//create a database connection -> u can also
//create a separate file for this and then import/use that file here

mongoose
  .connect(
    "mongodb+srv://aditya:murari@cluster0.plckg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

const _dirname = path.resolve();

// const allowedOrigins = [
//   'http://localhost:5000', // for local development
//   'https://ecommerce-website-k84z.onrender.com' // for deployed frontend
// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     // Allow requests with no origin, like mobile apps or curl
//     if (!origin) return callback(null, true);
//     if (allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true // If you're using cookies
// }));

app.use(cookieParser());
app.use(express.json());
const corsOptions = {
  origin:"https://localhost:5173",
  Credentials:true
}
app.use(cors(corsOptions));

app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);

app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);

app.use("/api/common/feature", commonFeatureRouter);

app.use(express.static(path.join(_dirname,"/client/dist")));
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(_dirname,"client","dist","index.html"));
})

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
