var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log('res',res);
  // res.render('index', { title: 'Express' });
  res.send(200, '666');
});

module.exports = router;
