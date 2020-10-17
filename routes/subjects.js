var express = require('express');
var router = express.Router();
var { authenticate } = require('../middleware/auth')

/* GET home page. */
router.get('/', authenticate, function(req, res, next) {
  res.send("chamika");
});

module.exports = router;
