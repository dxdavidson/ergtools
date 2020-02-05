var express = require('express');
var router = express.Router();

var ergtools_controller = require('../controllers/ergtoolsController');
var stagger_controller = require('../controllers/staggerController');

// GET catalog home page
router.get('/', ergtools_controller.index);


router.get('/stagger/create', stagger_controller.stagger_create_get);
router.post('/stagger/create', stagger_controller.stagger_create_post);



module.exports = router;