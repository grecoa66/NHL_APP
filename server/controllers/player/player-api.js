const express = require('express');
const router = express.Router();
const axios = require('axios');
const playoffs = require('../playoffs/playoffs-api');
const urlList = require('../../common/url-list');

// Path to these endpoints : '/api/players/...'

router.use('/playoffs', playoffs);
/**
 * This route will get the players for the specified year.
 * This route will return all the players from the specific year
 */
router.get('/:year', (req, res) => {
    let fullUrl = urlList.nhl_base_url +
        `${req.param('year')}/cumulative_player_stats.json`;

    axios.get(fullUrl, {
        auth: {
            'username': process.env.MYSPORTSFEEDSUSER,
            'password': process.env.MYSPORTSFEEDSKEY
        }
    }).then(response => {
        res.send(response.data.cumulativeplayerstats.playerstatsentry);
    }).catch(error => {
        sendError(res, error);
    });
});

/**
 * This route will get you detailed player data about a specific player,
 * for a specific year. The names are used as dash delimited firstName-lastName.
 */

router.get('/:year/:playerName', (req, res) => {
    let fullUrl = urlList.nhl_base_url +
        `${req.param('year')}/cumulative_player_stats.json?player=${req.param('playerName')}`;

    axios.get(fullUrl, {
        auth: {
            'username': process.env.MYSPORTSFEEDSUSER,
            'password': process.env.MYSPORTSFEEDSKEY
        }
    }).then(response => {
        res.send(response.data.cumulativeplayerstats.playerstatsentry);
    }).catch(error => {
        sendError(res, error);
    });
});

function sendError(res, error){
    console.log('ERROR', error.response.data);
    if (error.response) {
        res.send(error.response.status);
    }else{
        res.send('404');
    }
}

module.exports = router;
