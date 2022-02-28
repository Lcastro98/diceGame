const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

const Game = require('../models/game');

/* Crear un nuevo juego */
router.post('/', gameController.gameCreatePost);

module.exports = router;
