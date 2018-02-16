const express = require('express');
const router = express.Router();
const axios = require('axios');
const urlList = require('../../common/url-list');

router.get('/', (req, res) => {
  //TODO: This shouldn't be just the devils, this should be all
  let fullUrl = urlList.nhl_base_url + '2016-2017-regular/roster_players.json?team=njd';

  axios.get(fullUrl, {
    auth: {
      'username': process.env.MYSPORTSFEEDSUSER,
      'password': process.env.MYSPORTSFEEDSKEY
    }
  }).then(response => {
    res.send(response.data.rosterplayers.playerentry);
  }).catch(error => {
    console.log('ERROR', error);
  })
});

router.get('/:playerName', (req, res) => {
  res.send(req.param('playerName') + ' is in the building!');
});

module.exports = router;
