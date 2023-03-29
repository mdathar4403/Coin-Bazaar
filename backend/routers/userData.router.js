import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from "dotenv";
import auth from "../middlewere/auth.middle.js";
const router = express.Router();
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

//Handling Get request
router.post("/portfolio", async (req, res, next) => {
  const { userId } = req.body;
  // console.log(req);
  // const userId = req.params.userId;
  console.log(userId);
  let userData = await User.findById(userId);
  console.log(userData);
  console.log(userData.stocks);
  res.json(userData.stocks);
});

// Add a Stock To User's Portfolio
router.post("/stock/add", auth,async (req, res, next) => {
  console.log(SECRET_KEY);
  var { userId, stockId, current_price, quantity } = req.body;
  // console.log(userId);
  //remove single quote from object id
  userId = userId.replace(/['"]+/g, "");
  console.log(userId); 
  const user = await User.findOne({
    _id: userId,
    stocks: { $elemMatch: { stockId: stockId } },
  });
 
  if (user) {
    // If the stock already exists, update the quantity
    await User.updateOne(
      {
        _id: userId,
        stocks: { $elemMatch: { stockId: stockId } },
      },
      {
        $inc: {
          "stocks.$.quantity": quantity,
          "credits": -current_price * quantity,
          "stocks.$.total_amount": current_price * quantity,
        },
      }
    );
  } else {
    // If the stock doesn't exist, add a new object
    let userData = await User.findOneAndUpdate(
      {
        _id: userId,
      },
      {
        $addToSet: {
          stocks: {
            stockId: stockId,
            quantity: quantity,
            total_amount: current_price * quantity,
          },
        },
        $inc: {
          credits: -current_price * quantity,
        },
      },
      {
        new: true,
      }
    );
  } 
  const updatedUser = await User.findById({
    _id: userId,
  });
  console.log(updatedUser);
  res.json(updatedUser);
});

router.post("/stock/remove",auth,async (req, res, next) => {
  const { userId, stockId, current_price, quantity } = req.body;
  const user = await User.findOne({
    _id: userId,
    stocks: { $elemMatch: { stockId: stockId } },
  });

  if (user) {
    const stock = user.stocks.find((s) => s.stockId === stockId);
    const newQuantity = stock.quantity - quantity;
    const newTotalAmount = stock.total_amount - current_price * quantity;
    if (newQuantity > 0) {
      await User.updateOne(
        {
          _id: userId,
          stocks: { $elemMatch: { stockId: stockId } },
        },
        {
          $set: {
            "stocks.$.quantity": newQuantity,
            "stocks.$.total_amount": newTotalAmount,
          },
          $inc: {
            credits: current_price * quantity,
          },
        }
      );
    } else {
      res.status(404).json({ message: "Stock not found." });
    }
    const updatedUser = await User.findById({
      _id: userId,
    });
    console.log(updatedUser);
    res.json(updatedUser);
    } else {
    res.status(404).json({ message: "User or stock not found." });
  }
});


// // Buy a Stock
// router.post('/buy/stocks', async (req, res, next) => {
//   const {email, stockName, stockPrice, stockQuantity} = req.body;
//   let existingUser;
//   try {

//   res.send("Stocks Bought");
// }

export default router;
