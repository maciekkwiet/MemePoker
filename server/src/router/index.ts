const router = require('express').Router();

const newSession = require('./newSession');

router.use('/newSession', newSession);

module.exports = router;
