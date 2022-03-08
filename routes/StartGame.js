const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

const Game = require('../models/game');

/* GET users listing. */
/*router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.post('/', gameController.startGamePost);

module.exports = router;
