var express = require('express');
var router = express.Router();
const chats = require("../data");
const cors = require('cors');
const {registerUser,allUsers} = require("../controllers/userController");
const passport = require('../passport');
const generateToken = require("../controllers/jwt");
const {protect} = require("../auhtMiddleware");
const {accessChat} = require("../controllers/chatController");

//router.post('/', cors(), registerUser);
router.get('/api/user',protect,allUsers); 
router.use(cors());
//router.get('/chats',cors(),(req,res)=>{
//  res.send("yee");
//});
router.post("/log-in", cors(), (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }

    if (!user) {
      return res.status(401).json({ message: "Incorrect username or password" });
    }

    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ message: "Internal Server Error" });
      }

      return res.status(200).json({ message: "Login successful", user,
    token: generateToken(user._id), });
    });
  })(req, res, next);
});


module.exports = router;
