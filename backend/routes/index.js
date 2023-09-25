var express = require('express');
var router = express.Router();
const chats = require("../data");
const cors = require('cors');
const registerUser = require("../controllers/userController");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',cors(),registerUser); 


module.exports = router;
