const express = require('express');
const router = express.Router();

// @route  GET api/properties
// @desc   Test route
// @access Public *no token needed*
router.get('/', (req, res) => res.send('Properties route'));

module.exports = router;