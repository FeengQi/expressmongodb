var express = require('express');
var router = express.Router();
var User = require('./../mongoose').User;

// 这个路由为二级路由    全路径为/adduser/a
router.get('/a', function(req, res, next) {
  let data = {
    name: req.query.name,
    age: req.query.age,
  };
  var addUser = new User(data);
  addUser.save();
  res.send(JSON.stringify(data));
});

module.exports = router;
