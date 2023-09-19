var express = require('express');
var router = express.Router();
const chats = require("../data");
const cors = require('cors');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/api/chats", cors(), function(req, res, next) {
  res.send(chats);
}); 
router.get("/api/chats/:id", cors(), function(req, res, next) {
  const singlechat=chats.find(chat=>chat._id===req.params.id);
    res.send(singlechat)
  
  
}); 

module.exports = router;
