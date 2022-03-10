/**
 * Las rutas definen los métodos HTTP de la aplicación.
 * 
 * @version 1.00.00 2022-03-09 la ruta corresponde a la versión 1 del sistema.
 * 
 * @author Lorena Castro <lcastro0398@gmail.com>
 */

const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController')

/**
 * Método GET
 * Ruta para ver todos los juegos de la base de datos
 */
router.get('/games', gameController.games);

/**
 * Método GET
 * Ruta para ver un juego específico de la base de datos,
 * Requiere el id del juego deseado.
 */
router.get('/game/:id', gameController.gameDetails);

/**
 * Método GET
 * Ruta para ver el ganador de un juego específico de la base de datos,
 * Requiere el id del juego deseado.
 */
router.get('/game/:id/winner', gameController.winnerGet);

module.exports = router;
