const express = require('express');
const router = express.Router();

const Game = require('../models/game');

/* Crear un nuevo juego */
router.post('/', function(req, res, next) {
  
  const game = new Game({
    type: req.body.type,
    gamers: req.body.gamers
  })

  game.save()
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

module.exports = router;
