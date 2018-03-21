const express = require('express');
const router = express.Router();
const axios = require('axios');
const urlList = require('../../common/url-list');

// Path to these endpoints : 'api/teams/playoffs/...'

/**
 * This route is specifically players on a team in the playoffs of the year
 * passes in.
 * This route will consume a year and a team name that can either be
 * a dash delimited string of the city and team name (EX: newjersey-devils)
 * or an abbriviation of the team (EX: NJD). The abbriviations are the ones
 * commonly used for each team. Check most online nhl resources to find a list.
 * This route will return a list of players from the year and team the user selects.
 * It will return information about the players like name, position, goals, etc.
 */
router.get('/players/:year/:teamName', (req, res) => {
    let fullUrl = urlList.nhl_base_url +
        `${req.params.year + '-playoff'}/cumulative_player_stats.json?team=${req.params.teamName}`;

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
 * This route is specifically for a player on a team in the playoffs of the year
 * passes in.
 * This route will consume a year and a player name. If the player was in the playoffs
 * this will return all their stats from their playoff run.
 */
router.get('/player/:year/:playerName', (req, res) => {
    let fullUrl = urlList.nhl_base_url +
        `${req.params.year + '-playoff'}/cumulative_player_stats.json?player=${req.params.playerName}`;

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
 * This route is specifically for a players in the playoffs of the year
 * passes in.
 * This route will consume a year. If the player was in the playoffs
 * this will return all their stats from their playoff run.
 */
router.get('/players/:year', (req, res) => {
   let fullUrl = urlList.nhl_base_url +
    `${req.params.year + '-playoff'}/cumulative_player_stats.json`;

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
 * This route is specifically a team in the playoffs of the year
 * passes in.
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
        `${req.params.year + '-playoff'}/cumulative_player_stats.json?team=${req.params.teamName}`;
    let teamUrl =  urlList.nhl_base_url +
        `${req.params.year+ '-playoff'}/overall_team_standings.json?team=${req.params.teamName}`;


    axios.all([getPlayerTeam(playerUrl), getTeam(teamUrl)])
        .then(axios.spread((players, team) => {
            let fullObj = {
                team : team.data.overallteamstandings.teamstandingsentry,
                players : players.data.cumulativeplayerstats.playerstatsentry
            };
            res.send(fullObj);
        }))
        .catch(error => {
            sendError(res, error);
        });

});

/**
 * This route is specifically for teams in the playoffs of the year
 * passes in.
 * This route will consume a year that the user wants to
 * get a list of teams from. The data that is returned will
 * be an array of all teams from that year, their rank, wins,
 * etc.
 */
router.use('/:year', (req,res) => {
    // Add '-playoff' to get all teams that had playoff stats
    let fullUrl = urlList.nhl_base_url +
        `${req.params.year + '-playoff'}/overall_team_standings.json`;
    axios.get(fullUrl, {
        auth: {
            'username': process.env.MYSPORTSFEEDSUSER,
            'password': process.env.MYSPORTSFEEDSKEY
        }
    }).then(response => {
        res.send(response.data.overallteamstandings.teamstandingsentry);
    }).catch(error => {
       sendError(res, error);
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

function sendError(res, error){
    console.log('ERROR', error.response.data);
    if (error.response) {
        res.send(error.response.status);
    }else{
        res.send('404');
    }
}

module.exports = router;
