const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('The teams are here!');
});

router.get('/:teamName', (req, res) => {
  res.send('The home of the ' + req.param('teamName'));
});

module.exports = router;
