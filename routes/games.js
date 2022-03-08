const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController')

/* GET users listing. */
router.get('/', gameController.games);

router.get('/', gameController.gameDetails);

module.exports = router;
