const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dice Game' });
});

router.get('/createGame', gameController.gameCreateGet);

router.get('/startGame', function(req, res, next) {
  res.render('start', { title: 'Dice Game' });
});

module.exports = router;
