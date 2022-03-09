const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

const Game = require('../models/game');

router.post('/', gameController.startGamePost);

module.exports = router;
