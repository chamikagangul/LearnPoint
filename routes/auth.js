var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

function generateAccessToken(username) {
  return jwt.sign(username, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
}

router.post('/login', function(req, res, next) {
  console.log(req.body.email)
  if (req.body.email == 'p@gmail.com' & req.body.password == 'pathum') {
    const token = generateAccessToken({ username: req.body.username });
    res.json(token);
  }
  res.status(403).send();
});

module.exports = router;
