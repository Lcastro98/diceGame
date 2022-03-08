const Game = require('../models/game');
const ObjectId = require('mongoose').Types.ObjectId;

const games = (req, res, next) => {
    const data = Game.find({
        $or: [
          { 'delete': {$eq: false } },
          { 'delete': { $exists: false } },
        ]
      });
      data
        .then(result => res.json(result))
        .catch(err => console.log(err));
}

const gameDetails = (req, res) => {
    const id = req.params.id;
    Game.findById(id)
        .then(result => { {res.json({
            "id": result._id,
            "gamers": {
                [result.gamers[0]._id] : {
                    "id": result.gamers[0]._id,
                    "name": result.gamers[0].name},
                [result.gamers[1]._id] : {
                    "id": result.gamers[1]._id,
                    "name": result.gamers[1].name},
                [result.gamers[2]._id] : {
                    "id": result.gamers[2]._id,
                    "name": result.gamers[2].name},
            },
            "inProgress": result.inProgress,
            "winner": {
                "id": result.winner._id,
                "name": result.gamers.winner
            }}
            )}
        })
        .catch(err => {
            console.log(err);
        });
}

const gameCreateGet = (req, res) => {
    res.render('create', { title: 'Dice Game' });
}

const gameCreatePost = async(req, res) => {
    const game = new Game({
        id: req.body.id,
        type: req.body.type,
        gamers: req.body.gamers
    });

    game.save()
        .then((result) => { res.json({
            "id": result._id,
            "type": result.type,
            "gamers": [
                result.gamers[0].name,
                result.gamers[1].name,
                result.gamers[2].name]
        })})
        .catch((err) => {res.json(err)});
}

const startGameGet = (req, res) => {
    res.render('start', { title: 'Dice Game' });
}

const startGamePost = (req, res) => {
    const oldGamers = Game.toString();
    console.log(oldGamers);
    /*let body = req.body;
    Game.updateOne({ _id : body._id }, {
        $set: {
            gamers : body.gamers
    }})
        .then((result) => {res.json({
            "id": result._id,
            "type": "",
            "gamerBet": {
                [result.gamers[0]._id] : [result.gamers[0].bet],
                [result.gamers[1]._id] : [result.gamers[1].bet], 
                [result.gamers[2]._id] : [result.gamers[2].bet]
            }
        })})
        .catch((err) => {res.json(err)});*/
}

module.exports = {
    games,
    gameDetails,
    gameCreateGet,
    gameCreatePost,
    startGameGet,
    startGamePost
}