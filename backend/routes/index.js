var express = require('express');
var router = express.Router();
const chats = require("../data");
const cors = require('cors');
const {authUser,registerUser} = require("../controllers/userController");
const passport = require('../passport');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',cors(),registerUser); 
router.use(cors());
router.get('/chats',cors(),(req,res)=>{
  res.send("yee");
});
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

      return res.status(200).json({ message: "Login successful", user });
    });
  })(req, res, next);
});


module.exports = router;
