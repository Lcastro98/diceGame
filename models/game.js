const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');

const gameSchema = new Schema({
    type: {
        type: String,
        requiered: [true, 'El tipo de apuesta es requerido']
    },
    gamers: {
        name: [{
            type: String,
            trim: true,
            require: [true, 'El nombre del jugador es requerido']
        }]
    }
}, { timestamps: true });

gameSchema.plugin(mongooseSoftDelete);

module.exports = Game = mongoose.model('Game', gameSchema);