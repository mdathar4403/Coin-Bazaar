import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import dotenv from "dotenv";

const router = express.Router();

//Handling Get request
router.get("/portfolio", async (req, res, next) => {
  const { userId } = req.body;
  let userData =  await User.findById(userId);
  console.log(userData);
  console.log(userData.stocks);
  res.json(userData.stocks);
});

// Add a Stock To User's Portfolio
router.post('/stock/add', async (req, res, next) => {
  const {userId,stock} = req.body;
  console.log(stock);
  let userData = await User.findOneAndUpdate(
    {
      _id: userId,
    },
    {
      $addToSet: {
        stocks: stock,
      },
    },
    {
      new: true,
    }
  );
  const updatedUser = await User.findById({
    _id: userId,
  });
  console.log(updatedUser);
  res.json(updatedUser);
});


// Remove a Stock From User's Portfolio
router.delete('/stocks', async (req, res, next) => {
  const {stockid,userId} = req.body;
  User.findOneAndUpdate(
    {
      _id: userId,
    },
    {
      $pull: {
        stocks: {
          id: stockid,
        },
      },
    },
    {
      new: true,
    }
  );
  let user = await User.findById({
    _id: userId,
  });
  res.json(user);
});


// // Buy a Stock
// router.post('/buy/stocks', async (req, res, next) => {
//   const {email, stockName, stockPrice, stockQuantity} = req.body;
//   let existingUser;
//   try {

//   res.send("Stocks Bought");
// }





export default router;

