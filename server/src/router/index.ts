const express = require('express');
const router = express.Router();

const newSession = require('./newSession');
const dataSession = require('./dataSession');

router.use('/newSession', newSession);
router.use('/dataSession', dataSession);

module.exports = router;
