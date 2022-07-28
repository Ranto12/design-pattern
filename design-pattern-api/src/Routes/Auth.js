const express = require('express');

const router = express.Router();

const authCOntroler = require('../controller/Auth');

// CREATE post
router.post('/register', authCOntroler.register);

module.exports = router;