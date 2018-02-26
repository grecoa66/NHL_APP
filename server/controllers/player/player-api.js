const express = require('express');
const router = express.Router();
const axios = require('axios');
const urlList = require('../../common/url-list');

/**
 * This route will get the players for the specified year.
 * This route will return all the players from the specific year
 */
router.get('/:year', (req, res) => {
  let fullUrl = urlList.nhl_base_url + `${req.param('year')}/cumulative_player_stats.json`;

  axios.get(fullUrl, {
    auth: {
      'username': process.env.MYSPORTSFEEDSUSER,
      'password': process.env.MYSPORTSFEEDSKEY
    }
  }).then(response => {
    res.send(response.data.cumulativeplayerstats.playerstatsentry);
  }).catch(error => {
    console.log('ERROR', error);
  });
});

router.get('/:year/:playerName', (req, res) => {
  //res.send(`${req.param('playerName')} is in the building! It is the year ${req.param('year')}`);

    let fullUrl = urlList.nhl_base_url + `${req.param('year')}/cumulative_player_stats.json?player=${req.param('playerName')}`;

    axios.get(fullUrl, {
        auth: {
            'username': process.env.MYSPORTSFEEDSUSER,
            'password': process.env.MYSPORTSFEEDSKEY
        }
    }).then(response => {
        res.send(response.data.cumulativeplayerstats.playerstatsentry);
    }).catch(error => {
        console.log('ERROR', error);
    });
});

module.exports = router;
