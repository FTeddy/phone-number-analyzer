const express = require('express');
const router = express.Router();
const { analyzer } = require('../controllers/Analyzer')
const numberProcessor = require('../middleware/numberProcessor')
const fengShui = require('../middleware/fengShui')

router.get('/', function(req, res, next) {
  res.send('default ./phone');
});

// route: /phone
router.post('/change', numberProcessor, fengShui, analyzer)

module.exports = router;
