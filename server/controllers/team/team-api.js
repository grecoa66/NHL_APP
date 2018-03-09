const express = require('express');
const router = express.Router();
const axios = require('axios');
const playoffs = require('../playoffs/playoffs-api');
const urlList = require('../../common/url-list');

// Path to these endpoints : '/api/teams/...'


router.use('/playoffs', playoffs);
/**
 * This route will consume a year and a team name that can either be
 * a dash delimited string of the city and team name (EX: newjersey-devils)
 * or an abbriviation of the team (EX: NJD). The abbriviations are the ones
 * commonly used for each team. Check most online nhl resources to find a list.
 * This route will return a list of players from the year and team the user selects.
 * It will return information about the players like name, position, goals, etc.
 */
router.get('/:year/:teamName', (req, res) => {
    // Add '-regular' to the year for the regular season stats
    let playerUrl = urlList.nhl_base_url +
        `${req.params.year + '-regular'}/cumulative_player_stats.json?team=${req.params.teamName}`;
    let teamUrl =  urlList.nhl_base_url +
        `${req.params.year+ '-regular'}/overall_team_standings.json?team=${req.params.teamName}`;


    axios.all([getPlayerTeam(playerUrl), getTeam(teamUrl)])
        .then(axios.spread((players, team) => {
            let fullObj = {
                team : team.data.overallteamstandings.teamstandingsentry,
                players : players.data.cumulativeplayerstats.playerstatsentry
            };
            res.send(fullObj);
        }));

});

/**
 * This route will consume a year that the user wants to
 * get a list of teams from. The data that is returned will
 * be an array of all teams from that year, their rank, wins,
 * etc.
 */
router.get('/:year', (req, res) => {
    // Add '-regular' to the year for the regular season stats
    let fullUrl = urlList.nhl_base_url +
            `${req.params.year+ '-regular'}/overall_team_standings.json`;
    axios.get(fullUrl, {
        auth: {
            'username': process.env.MYSPORTSFEEDSUSER,
                'password': process.env.MYSPORTSFEEDSKEY
        }
    }).then(response => {
        res.send(response.data.overallteamstandings.teamstandingsentry);
    }).catch(error => {
        console.log('ERROR', error.request.res);
        res.send(error.Error);
    });
});


function getPlayerTeam(fullUrl){

    return axios.get(fullUrl, {
        auth: {
            'username': process.env.MYSPORTSFEEDSUSER,
            'password': process.env.MYSPORTSFEEDSKEY
        }
    });
}

function getTeam(fullUrl){
    return axios.get(fullUrl, {
        auth: {
            'username': process.env.MYSPORTSFEEDSUSER,
            'password': process.env.MYSPORTSFEEDSKEY
        }
    });
}


module.exports = router;
