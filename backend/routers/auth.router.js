import express from "express";
import User from '../models/user.js'
import jwt from "jsonwebtoken";
import auth from "../middlewere/auth.middle.js";
const router = express.Router();




// Handling post request
router.post("/login", async (req, res, next) => {
  let { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch {
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }
  if (!existingUser || existingUser.password != password) {
    const error = Error("Wrong details please check at once");
    return next(error);
  }
  let token;
  try {
    //Creating jwt token
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
  } catch (err) {
    console.log(err);
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }

  res.status(200).json({
    success: true,
    data: {
      userId: newUser.id,
      email: newUser.email,
      token: token,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
    },
  });
});

// Handling post request
router.post("/signup", async (req, res, next) => {
  const { first_name, last_name, email, password, phone, address } = req.body;

  const newUser = await User({
    first_name,
    last_name,
    email,
    password,
    phone,
    address,
    credits: 1000,
    stocks: [],
  });
  newUser.save().then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
  });
  let token;
  try {
    token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      "secretkeyappearshere",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new Error("Error! Something went wrong. 2");
    return next(error);
  }
  res.status(201).json({
    success: true,
    data: { userId: newUser.id, email: newUser.email, token: token,first_name: newUser.first_name, last_name: newUser.last_name }
  });
});


router.delete('/logout',auth,async(req,res,next)=>{
  try{
    req.user.tokens = req.user.tokens.filter((token)=>{
      return token.token != req.token;
    })
    await req.user.save();
    res.send('Logged out successfully');
  }catch(e){
    res.status(500).send(e);
  }
});

export default router;