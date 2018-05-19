const express = require('express');
const router = express.Router();
const axios = require('axios');
const urlList = require('../../common/url-list');
const errorHandler = require('../../common/error');

router.get('/', (req, res) => {

   res.send('Hey you hit it');
});

router.get('/:year/:date', (req, res) => {

    let fullUrl = urlList.nhl_base_url + `${req.param('year')}/scoreboard.json?fordate=${req.param('date')}`;

    axios.get(fullUrl, {
        auth: {
            'username': process.env.MYSPORTSFEEDSUSER,
            'password': process.env.MYSPORTSFEEDSKEY
        }
    }).then(response => {
        res.send(response.data);
    }).catch(error => {
        errorHandler.basicErrorHandler(error);
        errorHandler.sendError(res, error);
    });

});

module.exports = router;
