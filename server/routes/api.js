const express = require('express');
const cors = require('cors');
const router = express.Router();

//router.all('*', cors());

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works' );
});

module.exports = router;
