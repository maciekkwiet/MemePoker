const express = require('express');
const router = express.Router();

const newSession = require('../services/newSession');
const dataSession = require('../services/dataSession');

router.use('/newSession', newSession);
router.use('/dataSession', dataSession);

module.exports = router;
