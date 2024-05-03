var express = require('express');
var router = express.Router();

const controller = require('../controllers/indexController');
const jwt = require('../middleware/jwtHandler')

router.get('/login', jwt.isLogged, controller.get_login);
router.post('/login', 
    jwt.isLogged,
    controller.post_login
);

router.get('/register', jwt.isLogged, controller.get_register);
router.post('/register',
    jwt.isLogged,
    controller.post_register
);

router.get('/user', jwt.validate_token,controller.get_user);

router.post('/logout', jwt.validate_token, controller.post_logout)

module.exports = router;