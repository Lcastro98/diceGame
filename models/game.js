const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
const mongooseSoftDelete = require('mongoose-delete');

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
        }
      }
    ],
}, { timestamps: true });

gameSchema.plugin(mongooseSoftDelete);

module.exports = Game = mongoose.model('Game', gameSchema);