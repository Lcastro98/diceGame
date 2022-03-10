/**
 * Las rutas definen los métodos HTTP de la aplicación.
 * 
 * @version 1.00.00 2022-03-09 la ruta corresponde a la versión 1 del sistema.
 * 
 * @author Lorena Castro <lcastro0398@gmail.com>
 */

const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

/**
 * Método POST
 * Permite crear un juego.
 */
router.post('/', gameController.gameCreatePost);

module.exports = router;
