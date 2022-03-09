const game = require('../models/game');
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
        res.render('games', { title: 'Dice Game' })
        .then(result => res.json(result))
        .catch(err => console.log(err));
}

const gameDetails = async(req, res) => {
    const id = req.params.id;
    Game.findById(id)
    .then((result) => { 
        for (let i = 0; i < 3; i++) {
            if (result.gamers[i].name === result.winner.name) 
            {res.json({
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
                "id": result.gamers[i]._id,
                "name": result.winner.name
            }}
        )}
        }})
        .catch((err) => {res.json(err)});
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

function numRand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

const startGamePost = async (req, res) => {
    let body = req.body;
    for (let i = 0; i < 3; i++) {
        Game.findOne({_id: body._id})
        .then(result => Game.updateOne({ _id : body._id },
            {$set: 
                {"gamers.$[gamer].bet": body.gamers[i].bet}},
                {arrayFilters:[{"gamer._id": {$eq: ObjectId(result.gamers[i]._id)}}]}))
        .catch((err) => {res.json(err)});
    } 
    Game.findOne({_id: body._id})
    .then((result) => {res.json({
        "id": result._id,
        "type": "",
        "gamerBet": {
            [result.gamers[0]._id] : result.gamers[0].bet,
            [result.gamers[1]._id] : result.gamers[1].bet, 
            [result.gamers[2]._id] : result.gamers[2].bet
    }})})
    .catch((err) => {res.json(err)})
    Game.findOne({_id: body._id})
    .then(result =>  {
        let num = numRand(1,6)
        console.log(num)
        for (let i = 0; i < 3; i++) {
            if (num === result.gamers[i].bet){
                Game.updateOne({ _id : body._id }, {
                    $set: {
                        winner: { name: result.gamers[i].name}}}).catch(err => console.log(err))
            break
            } else {console.log("no hay ganador")}
        }

    })
}

const winnerGet = (req, res) => {
    const id = req.params.id;
    Game.findById(id)
    .then(result => {
    for (let i = 0; i < 3; i++) {
        if (result.gamers[i].name === result.winner.name){
            {res.json({
                "id": result.gamers[i]._id,
                "name": result.winner.name
            })}
            break
        }}})
        .catch((err) => {res.json(err)});
}




module.exports = {
    games,
    gameDetails,
    gameCreateGet,
    gameCreatePost,
    startGameGet,
    startGamePost,
    winnerGet
}