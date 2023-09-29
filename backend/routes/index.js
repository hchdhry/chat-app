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
router.post(
 
  "/log-in",
  cors(),
  passport.authenticate("local",{
    successRedirect: "/chats",
    failureRedirect: "/",
    
   
  })
);


module.exports = router;
