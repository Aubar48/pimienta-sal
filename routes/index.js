const express = require('express');
const indexController = require('../controller/indexController');
const router = express.Router();

/* GET home page. */
router.get('/', indexController.index);
router.get('/detalle/:id', indexController.detail);
module.exports = router;
