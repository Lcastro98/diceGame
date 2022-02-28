const Game = require('../models/game');

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
        .then(result => {
            res.render('game', {game: result, title: 'Game Details'});
        })
        .catch(err => {
            console.log(err);
        });
}

const gameCreateGet = (req, res) => {
    res.render('create', { title: 'Dice Game' });
}

const gameCreatePost = (req, res) => {
    const game = new Game({
        id: req.body.id,
        type: req.body.type,
        gamers: req.body.gamers
    });

    game.save()
        .then((result) => {res.json(result)})
        .catch((err) => {res.json(err)});
}

const startCreatePost = (req, res) => {
    Game.findOne({_id:id})
        .then((result) => {res.json({
            "id": result._id,
            "type": "",
            "gamerBet": [{
                "id": result.gamers[0]._id,
                "bet": gamerBet[0]
            },{
                "id": result.gamers[1]._id,
                "bet": gamerBet[1]
            },{
                "id": result.gamers[2]._id,
                "bet": gamerBet[2]
            }]
        })})
        .catch((err) => {res.json(err)});
}

module.exports = {
    games,
    gameDetails,
    gameCreateGet,
    gameCreatePost,
    startCreatePost
}