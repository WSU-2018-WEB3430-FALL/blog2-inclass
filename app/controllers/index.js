let express = require('express');
let router = express.Router();
let posts = require("../models/data");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Blog', posts });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'My Blog', posts });
});

router.get('/:id', function(req, res, next) {
  let post = undefined;
  for(let p of posts){
    if(p.id == req.params.id){
      post = p;
      break;
    }
  }
  res.render('index', { title: 'My Blog', post });
});

module.exports = router;
