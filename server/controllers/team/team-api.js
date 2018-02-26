const express = require('express');
const router = express.Router();
const axios = require('axios');
const urlList = require('../../common/url-list');

router.get('/', (req, res) => {
  res.send('The teams are here!');
});

router.get('/:year/:teamName', (req, res) => {
    let fullUrl = urlList.nhl_base_url +
        `${req.param('year')}/cumulative_player_stats.json?team=${req.param('teamName')}`;

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

router.get('/:teamName', (req, res) => {
  res.send('The home of the ' + req.param('teamName'));
});

module.exports = router;
