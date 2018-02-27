const express = require('express');
const router = express.Router();
const axios = require('axios');
const urlList = require('../../common/url-list');

/**
 * This route will consume a year that the user wants to
 * get a list of teams from. The data that is returned will
 * be an array of all teams from that year, their rank, wins,
 * etc.
 */
router.get('/:year', (req, res) => {
    let fullUrl = urlList.nhl_base_url +
            `${req.param('year')}/overall_team_standings.json`;
    axios.get(fullUrl, {
        auth: {
            'username': process.env.MYSPORTSFEEDSUSER,
                'password': process.env.MYSPORTSFEEDSKEY
        }
    }).then(response => {
        res.send(response.data.overallteamstandings.teamstandingsentry);
    }).catch(error => {
        console.log('ERROR', error);
    });
});

/**
 * This route will consume a year and a team name that can either be
 * a dash delimited string of the city and team name (EX: newjersey-devils)
 * or an abbriviation of the team (EX: NJD). The abbriviations are the ones
 * commonly used for each team. Check most online nhl resources to find a list.
 * This route will return a list of players from the year and team the user selects.
 * It will return information about the players like name, position, goals, etc.
 */
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


module.exports = router;
