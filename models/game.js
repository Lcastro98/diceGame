const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
const mongooseSoftDelete = require('mongoose-delete');

/**
 * Modelo del esquema Game, permite guardar los datos de los documentos creados.
 * 
 * @version 1.00.00 2022-03-09 el modelo corresponde a la versión 1 del sistema.
 * 
 * @author Lorena Castro <lcastro0398@gmail.com>
 */
const gameSchema = new Schema({
    id: {
        type: ObjectId
    },
    type: {
        type: String,
        default: "",
    },
    gamers: [{
      name: {
        type: String,
        trim: true,
        require: true
      },
      bet: {
        type: Number,
        default: 0,
        require: true
      }
    }],
    inProgress: {
      type: Boolean,
      default: false,
    },
    winner: {
      name: {
        type: String,
        default: '',
      }
    }
}, { timestamps: true });

gameSchema.plugin(mongooseSoftDelete);

module.exports = Game = mongoose.model('Game', gameSchema);