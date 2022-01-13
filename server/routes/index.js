var express = require('express');
const IndexController = require('../controllers/IndexController')

var router = express.Router();

router.get('/', IndexController.index)
router.get('/servo90', IndexController.servo90)
router.get('/servo180', IndexController.servo180)

module.exports = router;
