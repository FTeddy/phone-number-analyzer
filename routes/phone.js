const express = require('express');
const router = express.Router();
const { analyzer } = require('../controllers/Analyzer')
const { numberProcessor, numberProcessorMany } = require('../middleware/numberProcessor')
const { fengShui, fengShuiMany } = require('../middleware/fengShui')

// route: /phone
router.post('/analyze/one', numberProcessor, fengShui, analyzer)
router.post('/analyze/many', numberProcessorMany, fengShuiMany, analyzer)

module.exports = router;
