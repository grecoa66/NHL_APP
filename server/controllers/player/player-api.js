const express = require('express');
const router = express.Router();
const axios = require('axios');
const urlList = require('../../common/url-list');

router.get('/', (req, res) => {
  let fullUrl = urlList.nhl_base_url + '2016-2017-regular/roster_players.json?team=njd';
  console.log(fullUrl);


  axios.get(fullUrl, {
    auth: {
      'username': process.env.MYSPORTSFEEDSUSER,
      'password': process.env.MYSPORTSFEEDSKEY
    }
  }).then(response => {
    console.log('STATUS: ', response.status);
    res.send(JSON.stringify(response.data.rosterplayers.playerentry))
  }).catch(error => {
    console.log('ERROR', error);
  })
});

router.get('/:playerName', (req, res) => {
  res.send(req.param('playerName') + ' is in the building!');
});

module.exports = router;
