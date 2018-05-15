const express = require('express');
const router = express.Router();

const teams = require('../controllers/team/team-api');
const players = require('../controllers/player/player-api');
const playoffs = require('../controllers/playoffs/playoffs-api');
const gamelog = require('../controllers/game-logs/game-log-api');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send(`<h2>Welcome to the Grecks Hockey DB API ... </h2>
            <br><h2> Go use a more usefull route ...</h2>` );
});

router.use('/players', players);

router.use('/teams', teams);

router.use('gamelog', gamelog);

module.exports = router;
