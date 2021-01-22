const express = require('express');
const router = express.Router();
console.log('router is running');
//calling controller
const homeController = require('../controllers/home_controller');
router.get('/', homeController.home);
//user.js calling router 
router.use('/users',require('./user'));


module.exports = router;
