const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../controllers/jwt.js");


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password} = req.body;
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please enter all fields");
    }

  const userExists = await User.findOne({ email: email }) ;

        if (userExists) {
          res.status(400);
          throw new Error("User already exists");
        }
        
          const user = await User.create({
            name,
            email,
            password,
          });
          if (user) {
            res.status(201).json({
              _id: user._id,
              name: user.name,
              email: user.email,
              isAdmin: user.isAdmin,
              token: generateToken(user._id),
              
            });
          } 
      
});

const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search && {
    $or: [
      { name: { $regex: req.query.search, $options: 'i' } },
      { email: { $regex: req.query.search, $options: 'i' } },
    ],
  };
  const users = await User.find(keyword);
  res.send(users);
});

module.exports = {registerUser,allUsers};