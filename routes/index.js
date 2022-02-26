const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dice Game' });
});

router.get('/createGame', function(req, res, next) {
  res.render('create', { title: 'Dice Game' });
});

router.get('/startGame', function(req, res, next) {
  res.render('create', { title: 'Dice Game' });
});

module.exports = router;