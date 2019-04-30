const express = require('express');
const router = express.Router();
const passport = require('passport');
const ctrlUser = require('../controllers/user.controller');
const ctrlAdmin = require('../controllers/admin.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.post('/authenticateAdmin',ctrlAdmin.authenticateAdmin);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.get('/adminProfile',jwtHelper.verifyJwtToken, ctrlAdmin.adminProfile);
module.exports = router;



