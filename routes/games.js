const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = Game.find({
    $or: [
      { 'delete': {$eq: false } },
      { 'delete': { $exists: false } },
    ]
  });
  data
    .then(result => res.json(result))
    .catch(err => console.log(err));
});

module.exports = router;
