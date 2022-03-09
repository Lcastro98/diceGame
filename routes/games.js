const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController')

/* GET users listing. */

/*router.get('/games', function(req, res, next) {
    res.render('games', { title: 'Dice Game' });
  });*/

router.get('/games', gameController.games);

router.get('/game/:id', gameController.gameDetails);

router.get('/game/:id/winner', gameController.winnerGet)

module.exports = router;
