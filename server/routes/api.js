const express = require('express');
const router = express.Router();

const teams = require('../controllers/team/team-api');
const players = require('../controllers/player/player-api');
const playoffs = require('../controllers/playoffs/playoffs-api');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works' );
});

router.use('/players', players);

router.use('/teams', teams);



module.exports = router;
